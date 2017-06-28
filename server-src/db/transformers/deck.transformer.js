const cardsFilePath = "cards/cards.json";
const abilitiesFilePath = "abilities/abilities.json";

let LinkedProperty = require("./").JSONLinkedProperty;
let propertyMap = [
  new LinkedProperty("commander", cardsFilePath),
  new LinkedProperty("deck", cardsFilePath)
];

module.exports = propertyMap;
