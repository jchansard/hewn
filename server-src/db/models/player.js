const JSONDB = require('./json-db.js');
const LinkedProperty = require('../transformers').JSONLinkedProperty;
const JSONFlesherOuter = require('../transformers').JSONFlesherOuter;
const cardsFilePath = "cards/cards.json";

module.exports.DB = function(client, hasher) {
  return new JSONDB('player', client, hasher);
}

function PlayerModel(commander, deck) {
  this.commander = commander;
  this.deck = deck;
}

let linkedPropertyMap = [
  new LinkedProperty("commander", cardsFilePath),
  new LinkedProperty("deck", cardsFilePath)
];

module.exports.Model = PlayerModel;
module.exports.linkedPropertyMap = linkedPropertyMap;
