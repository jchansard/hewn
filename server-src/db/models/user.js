const Observable = require('rxjs/Observable').Observable;

function UserModel(client, hasher) {
  this.client = client;
  this.hasher = hasher;
}

UserModel.prototype.add = function(name) {
  return new Observable((stream => {
    this.client.incr("id:user", (id) => {
      let hashedID = this.hasher.encode(id);
      this.client.set(`user:${name}`, hashedID);
      stream.next(hashedID);
      stream.close();
    }
  }));
}

UserModel.protoype.get = function(name) {
  return new Observable((stream => {
    this.client.get(name, (id) => {
      stream.next(id);
      stream.complete();
    })
  }))
}

module.exports = UserModel;
