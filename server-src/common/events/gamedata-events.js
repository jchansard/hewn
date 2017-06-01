"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gamedata_events_names_1 = require("./gamedata-events.names");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var GameDataEvents = (function () {
    function GameDataEvents() {
        this.events = new gamedata_events_names_1.GameDataEventNames();
    }
    Object.defineProperty(GameDataEvents.prototype, "loadPlayerEvent", {
        get: function () { return this.events.loadPlayer; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataEvents.prototype, "loadPlayerResponseEvent", {
        get: function () { return this.events.loadPlayerResponse; },
        enumerable: true,
        configurable: true
    });
    GameDataEvents.prototype.loadPlayerResponseStream = function (socket) {
        var _this = this;
        return new Observable_1.Observable(function (stream) {
            socket.on(_this.events.loadPlayerResponse, function (playerData) { return stream.next(playerData); });
        });
    };
    return GameDataEvents;
}());
exports.GameDataEvents = GameDataEvents;
//# sourceMappingURL=gamedata-events.js.map