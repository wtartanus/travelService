"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Inspiration = (function () {
    function Inspiration() {
        this.some = "link";
        //  constructor(city: {}) {
        ////    this.city = new City(city["id"], city["name"], city["history"], city["description"]);
        ////    
        ////    for(let p in photos) {
        ////      const photo = new Photo(p["id"], p["cityId"], p[this.some]);
        ////      this.photos.push(photo);
        ////    }
        ////    
        ////    this.weather = new Weather(weather["temperatures"]["id"], weather["temperatures"]["cityId"], weather["temperatures"]["values"]);
        ////    
        ////    for(let a in activities) {
        ////      const activity = new Activity(a["id"], a["cityId"], a["city"], a["description"], a["photoLink"], a["address"]);
        ////      this.activities.push(activity);
        ////    }
        //    
        //  }
    }
    return Inspiration;
}());
Inspiration = __decorate([
    core_1.Injectable()
], Inspiration);
exports.Inspiration = Inspiration;
//# sourceMappingURL=inspiration.js.map