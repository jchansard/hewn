const Observable = require('rxjs/Observable').Observable;

function JSONModel(name, client, hasher) {
  this.name = name;
  this.client = client;
  this.hasher = hasher;
}

JSONModel.prototype.add = function(value) {
  return new Observable(stream => {
    let idKey = `id:${this.name}`;
    this.client.incr(idKey, (err, newID) => {
      if (err) throw err;
      // add the new value
      this.client.set(`${this.name}:${newID}`, value);
      this.client.sadd(this.name, newID);
      // return hashed ID
      stream.next(this.hasher.encode(newID));
      stream.complete();
    });
  });
}

JSONModel.prototype.get = function(id) {
  return new Observable(stream => {
    let decodedID = this.hasher.decode(id);
    this.client.get(`${this.name}:${decodedID}`, (err, response) => {
      if (err) throw err;
      try { response = JSON.parse(response); } catch (err) { stream.error(err); }
      stream.next(response);
      stream.complete();
    });
  })
}

module.exports = JSONModel;
