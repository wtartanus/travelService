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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var common_service_js_1 = require("./../services/common.service.js");
require("rxjs/add/operator/toPromise");
var SearchService = (function () {
    function SearchService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    ;
    SearchService.prototype.setDestination = function (destination) {
        this.destination = destination;
    };
    SearchService.prototype.setDeparture = function (departure) {
        this.departure = departure;
    };
    SearchService.prototype.setDateFrom = function (dateFrom) {
        this.dateFrom = dateFrom;
    };
    SearchService.prototype.setDateTo = function (dateTo) {
        this.dateTo = dateTo;
    };
    SearchService.prototype.getCityDescription = function (city) {
        //http://de.wikipedia.org/w/api.php?action=query&prop=revisions&titles=M%C3%BCnchen&rvprop=content&format=xml
        //city = city.indexOf(" ") > -1 ? city.split(" ").join("%20") : city;
        city = city.split(",")[0];
        if (city.indexOf(" ") > -1) {
            var afterSplit = city.split(" ");
            for (var i = 0; i < afterSplit.length; i++) {
                afterSplit[i] = afterSplit[i].charAt(0).toUpperCase() + afterSplit[i].slice(1);
            }
            city = afterSplit.join("%20");
        }
        else {
            city[0].toUpperCase();
        }
        var url = "http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=" + city;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.commonService.handleError);
    };
    ;
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, common_service_js_1.CommonService])
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map