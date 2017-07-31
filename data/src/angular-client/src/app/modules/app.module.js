"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var mydatepicker_1 = require("mydatepicker");
var angular2_highcharts_1 = require("angular2-highcharts");
var app_component_js_1 = require("./../components/app.component.js");
var inspirations_component_js_1 = require("./../components/inspirations.component.js");
var common_service_js_1 = require("./../services/common.service.js");
var search_service_js_1 = require("./../services/search.service.js");
var searchResult_service_js_1 = require("./../services/searchResult.service.js");
var windowSize_js_1 = require("./../models/windowSize.js");
var inspiration_js_1 = require("./../models/inspiration.js");
var activity_js_1 = require("./../models/activity.js");
var city_js_1 = require("./../models/city.js");
var photo_js_1 = require("./../models/photo.js");
var weather_js_1 = require("./../models/weather.js");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            mydatepicker_1.MyDatePickerModule,
            angular2_highcharts_1.ChartModule.forRoot(require('highcharts'), require('highcharts/highcharts-3d'), require('highcharts/modules/exporting'))
        ],
        declarations: [
            app_component_js_1.AppComponent,
            inspirations_component_js_1.InspirationsComponent
        ],
        providers: [common_service_js_1.CommonService, search_service_js_1.SearchService, searchResult_service_js_1.SearchResultService, windowSize_js_1.WindowSize, inspiration_js_1.Inspiration, activity_js_1.Activity, city_js_1.City, photo_js_1.Photo, weather_js_1.Weather],
        bootstrap: [app_component_js_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map