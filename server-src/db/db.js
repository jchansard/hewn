const Redis = require('redis');
const Hashids = require('hashids');
const Observable = require('rxjs/Observable').Observable;

// models
const Models = require ('./models');
const PlayerDB = Models.PlayerDB;
const UserDB = Models.UserDB;

//todo: don't make static

function Database() {
  let db = Redis.createClient();
  let ids = new Hashids('hewn', 6);

  db.on("connect", () => console.log("connected to db"));
  
  this.players = new PlayerDB(db, ids)
  this.users = new UserDB(db, ids);
}

module.exports = Database;
