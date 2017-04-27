module.exports = (io) => {

  io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnect', () => console.log('user disconnected'));

    socket.on('request-tree', () => {
      io.json.emit('tree-update', {
          id: 1,
          color: 'brown',
          pointData: [
            [5, 5],
            [5, 900],
            [305, 900],
            [305, 5]
          ]
        }
      )
    });
  });

  return io;
}
