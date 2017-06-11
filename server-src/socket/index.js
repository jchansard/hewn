module.exports = function(io, db) {
  io.on('connection', (socket) => {
    // connect and disconnect
    console.log('user connected');

    socket.on('disconnect', () => console.log('user disconnected'));

    let players = [
      {
        id: 0,
        name: "xxSefirothxx",
        commander: 4,
        deck: [1,6,7]
      },
      {
        id: 1,
        name: "OXBOW",
        commander: 4,
        deck: [1,1,1]
      },
      {
        id: 2,
        commander: 3,
        name: "online_playing",
        deck: [5,5,8]
      },
      {
        id: 3,
        commander: 2,
        deck: [6,7,5]
      }
    ];

    players.forEach((player) => db.Players.add(json.stringify(player)));

    let users = [
      {
        name: "glasg0wn3d",
        id: 0
      },
      {
        name: "OXBOW",
        id: 1,
      },
      {
        name: "online_playing",
        id: 2,
      }
      {
        name: "LEFT4SCRAPS",
        id: 3
      }
    ];

    users.forEach((user) => db.Players.add(json.stringify(user)));

    let user = Math.floor(Math.rand()*4) // todo: obviously
    db.users.get(users[user].name, (id) => {
      socket.userID = id;
      require('./gamedata.socket.js')(socket, db);
    }


    // handle events
  });
  return io;
};
