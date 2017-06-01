module.exports = function(io) {
  io.on('connection', (socket) => {
    // connect and disconnect
    console.log('user connected');
    socket.on('disconnect', () => console.log('user disconnected'));

    // handle events
    require('./gamedata.socket.js')(io, socket);
  });
  return io;
};
