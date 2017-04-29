"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var FellEvents = (function () {
    function FellEvents() {
    }
    FellEvents.prototype.treeRequestStream = function () { return Observable_1.Observable.of('tree-request'); };
    FellEvents.prototype.treeResponseStream = function () { return Observable_1.Observable.of('tree-update'); };
    return FellEvents;
}());
exports.FellEvents = FellEvents;
//# sourceMappingURL=tree-response.js.map