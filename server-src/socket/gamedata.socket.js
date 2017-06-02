const GameDataEvents = require('../common/events/gamedata-events').GameDataEvents;
let events = new GameDataEvents();

var currID = 0;
var abilities = [{id:1}];
var names = ['xxSefirothxx','OXBOW','online_playing','lighthaus','EEEEK','kik','falafelEnthusiast','LEFT4SCRAPS'];
var commanders = ['man','strongman','weakman'];
var deck = [getMockActor('bear')];

function getMockPlayerData() {
  let name = Math.floor(Math.random() * names.length);
  let commander = Math.floor(Math.random() * commanders.length);
  currID++;
  return {
    id: currID,
    name: name,
    commander: getMockActor(commander),
    deck: deck
  }
}

function getMockActor(name) {
  return {
      id: 1,
      name: name,
      abilities: abilities,
      animations: [
        {
          name: 'idle',
          beginFrame: 1,
          endFrame: 1
        },
        {
          name: 'walk',
          beginFrame: 1,
          endFrame: 4
        }
      ]
  };
}

// sets up the passed socket to respond to player data request events
module.exports = (io, socket) => {
  socket.on(events.loadPlayerEvent, () => {
    console.log(events.loadPlayerResponseEvent);
    io.emit(events.loadPlayerResponseEvent, getMockPlayerData());
  });
}