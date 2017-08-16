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
require("rxjs/add/operator/toPromise");
var inspirations_component_js_1 = require("./../components/inspirations.component.js");
var datepicker_component_js_1 = require("./../components/datepicker.component.js");
var common_service_js_1 = require("./../services/common.service.js");
var search_service_js_1 = require("./../services/search.service.js");
var message_service_js_1 = require("./../services/message.service.js");
var AppComponent = (function () {
    function AppComponent(commonService, searchService, messageService) {
        var _this = this;
        this.commonService = commonService;
        this.searchService = searchService;
        this.messageService = messageService;
        this.showNav = false;
        this.showModal = false;
        this.today = new Date();
        this.returnDate = new Date();
        this.returnOptions = {};
        this.departOptions = {};
        this.width = '100%';
        this.height = '50px';
        this.departDateValue = {
            date: {
                year: this.today.getFullYear(),
                month: this.today.getMonth() + 1,
                day: this.today.getDate()
            }
        };
        this.returnDateValue = {
            date: {
                year: this.today.getFullYear(),
                month: this.today.getMonth() + 1,
                day: this.today.getDate()
            }
        };
        this.substriction = this.messageService.getMessage().subscribe(function (message) { return _this.updateDates(message); });
    }
    ;
    AppComponent.prototype.updateDates = function (message) {
        if (message.text === "dates-changed") {
            console.log("dayFrom: ", message.body.dateFrom);
            console.log("dayFrom: ", message.body.dateTo);
        }
    };
    AppComponent.prototype.setOptions = function (isReturn) {
        var date = isReturn ? this.returnDate : this.today;
        return {
            dateFormat: 'dd.mm.yyyy',
            showTodayBtn: false,
            sunHighlight: true,
            disableUntil: {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate() - 1
            },
            showClearDateBtn: false,
            height: this.height,
            width: this.width,
            editableDateField: false,
            openSelectorOnInputClick: true,
            selectionTxtFontSize: '1.5em'
        };
    };
    AppComponent.prototype.ngOnInit = function () {
        this.windowSize = this.commonService.getWindowSize();
        var input = document.getElementById('locationTextField');
        var autocomplete = new google.maps.places.Autocomplete(input);
        if (this.windowSize.getWidth() >= 1200) {
            this.height = '56.79px';
            this.width = '100%';
        }
        this.departOptions = this.setOptions(false);
        this.returnOptions = this.setOptions(true);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.substriction.unsubscribe();
    };
    AppComponent.prototype.onDateChanged = function (event) {
        this.returnDate = new Date(event.jsdate);
        console.info("departDateValue: ", this.departDateValue);
        this.setOptions(true);
        this.returnDateValue = {
            date: event.date
        };
    };
    AppComponent.prototype.searchForInspiration = function (city) {
        this.destination = city;
    };
    AppComponent.prototype.search = function () {
        var input = document.getElementById('locationTextField');
        this.destination = input["value"];
        this.searchService.processSearch(this.destination);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'src/app/views/app.component.html',
        providers: [common_service_js_1.CommonService],
        entryComponents: [inspirations_component_js_1.InspirationsComponent, datepicker_component_js_1.DatePickerComponent]
    }),
    __metadata("design:paramtypes", [common_service_js_1.CommonService, search_service_js_1.SearchService, message_service_js_1.MessageService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map