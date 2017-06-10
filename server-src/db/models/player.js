const JSONModel = require('./json-model.js');

module.exports = function(client, hasher) {
  return new JSONModel('player', client, hasher);
}
