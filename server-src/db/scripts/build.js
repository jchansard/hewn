let Database = require('../db.js');
let db = new Database();

let players = [
  {
    playerID: 0,
    commander: 4,
    deck: [1,6,7]
  },
  {
    playerID: 1,
    commander: 4,
    deck: [1,1,1]
  },
  {
    playerID: 2,
    commander: 3,
    deck: [5,5,8]
  },
  {
    playerID: 3, // todo: link to encoded id?
    commander: 2,
    deck: [6,7,5]
  }
];

let users = ["glasg0wn3d","OXBOW","online_playing","LEFT4SCRAPS"];

players.forEach((player) => db.players.add(JSON.stringify(player)));
users.forEach((user) => db.users.add(user));
