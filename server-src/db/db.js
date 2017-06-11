const Redis = require('redis');
const Hashids = require('hashids');
const Observable = require('rxjs/Observable').Observable;

// models
const Models = require ('./models');
const PlayerModel = Models.PlayerModel;
const UserModel = Models.UserModel;

//todo: don't make static
let db = Redis.createClient();
let ids = new Hashids('hewn', 6);

db.on("connect", () => console.log("connected to db"));

function Database() {
  this.players = new PlayerModel(db, ids)
  this.users = new UserModel(db, ids);
}

module.exports = Database;
