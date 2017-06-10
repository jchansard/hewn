const Redis = require('redis');
const Hashids = require('hashids');
const Observable = require('rxjs/Observable').Observable;

// models
const PlayerModel = require('./models').PlayerModel;

let db = Redis.createClient();
let ids = new Hashids('hewn', 6);

db.on("connect", () => console.log("connected to db"));

module.exports = {
  Players: new PlayerModel(db, ids)
}
