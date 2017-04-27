const socketIO = require('socket.io');

module.exports = (http) => {
  let io;
  io = socketIO(http);
  require('./fell.socket.js')(io);
}
