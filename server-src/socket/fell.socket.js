module.exports = (io) => {

  io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnect', () => console.log('user disconnected'));
  });

  return io;
}
