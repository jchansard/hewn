const GameDataEvents = require('../common/events/gamedata-events').GameDataEvents;
let events = new GameDataEvents();

let mockPlayerData = "hello world i am a player";

// sets up the passed socket to respond to player data request events
module.exports = (io, socket) => {
  socket.on(events.loadPlayerEvent, () => {
    console.log(events.loadPlayerResponseEvent);
    io.emit(events.loadPlayerResponseEvent, mockPlayerData);
  });
}
