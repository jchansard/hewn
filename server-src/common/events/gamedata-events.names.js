"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameDataEventNames = (function () {
    function GameDataEventNames() {
    }
    Object.defineProperty(GameDataEventNames.prototype, "loadPlayer", {
        get: function () { return 'load-player'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataEventNames.prototype, "loadPlayerResponse", {
        get: function () { return 'r:load-player'; },
        enumerable: true,
        configurable: true
    });
    return GameDataEventNames;
}());
exports.GameDataEventNames = GameDataEventNames;
//# sourceMappingURL=gamedata-events.names.js.map