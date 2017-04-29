"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fell_events_enum_1 = require("./fell-events.enum");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var FellEvents = (function () {
    function FellEvents() {
    }
    FellEvents.prototype.treeRequestStream = function () { return Observable_1.Observable.of(String(fell_events_enum_1.Events.treeRequest)); };
    FellEvents.prototype.treeResponseStream = function () { return Observable_1.Observable.of(String(fell_events_enum_1.Events.treeResponse)); };
    return FellEvents;
}());
exports.FellEvents = FellEvents;
//# sourceMappingURL=fell-events.js.map