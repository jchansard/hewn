function JSONLinkedProperty(name, filePath) {
  this.name = name;
  this.filePath = filePath;
}

function JSONFlesherOuter(object, propertyMap) {
  this.object = object;
  this.propertyMap = propertyMap;
}

JSONFlesherOuter.prototype.fleshOut = function() {
  this.propertyMap.forEach((property) => this.fleshOutProperty(property));
  return this.object;
}

JSONFlesherOuter.prototype.fleshOutProperty = function(property) {
  let linkedObjects = require(`../../gamedata/${property.filePath}`);
  let filterFunction = (currentObject) => (currentObject.id === this.object[property.name]);
  this.object[property.name] =
    (Array.isArray(this.object[property.name])) ?
      this.object[property.name].map((currentValue) => linkedObjects.find((linkedObject) => (linkedObject.id === currentValue)))
    :
      linkedObjects.find((currentObject) => (currentObject.id === this.object[property.name]));
}


module.exports.JSONFlesherOuter = JSONFlesherOuter;
module.exports.JSONLinkedProperty = JSONLinkedProperty;
