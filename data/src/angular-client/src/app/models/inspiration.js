"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var activity_js_1 = require("./../models/activity.js");
var Inspiration = (function () {
    function Inspiration(id, cityId, desc, history, activities) {
        this.id = id;
        this.cityId = cityId;
        this.desc = desc;
        this.history = history;
        for (var a in activities) {
            var activity = new activity_js_1.Activity(a["id"], a["cityId"], a["city"], a["description"], a["photoLink"], a["address"]);
            this.activities.push(activity);
        }
    }
    return Inspiration;
}());
Inspiration = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Number, String, String, String, Array])
], Inspiration);
exports.Inspiration = Inspiration;
//# sourceMappingURL=inspiration.js.map