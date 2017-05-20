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
var windowSize_js_1 = require("./../models/windowSize.js");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var CommonService = (function () {
    function CommonService(http) {
        this.windowSize = new windowSize_js_1.WindowSize(window.innerWidth, window.innerHeight);
        this.http = http;
    }
    CommonService.prototype.getWindowSize = function () {
        return this.windowSize;
    };
    CommonService.prototype.getInspirations = function () {
        return this.http.get("http://localhost:8080/travel-guide/data/inspirations")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CommonService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    CommonService.prototype.logger = function (item) {
        console.log("sfsd", item);
    };
    return CommonService;
}());
CommonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map