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
var common_service_js_1 = require("./../services/common.service.js");
var AppComponent = (function () {
    function AppComponent(commonService) {
        this.commonService = commonService;
        this.windowSize = {};
        this.showNav = false;
        this.today = new Date();
        this.returnDate = new Date();
        this.returnOptions = {};
        this.departOptions = {
            dateFormat: 'dd.mm.yyyy',
            showTodayBtn: false,
            sunHighlight: true,
            disableUntil: {
                year: this.today.getFullYear(),
                month: this.today.getMonth() + 1,
                day: this.today.getDate() - 1
            },
            showClearDateBtn: false,
            height: '50px',
            editableDateField: false,
            openSelectorOnInputClick: true,
            selectionTxtFontSize: '1.5em'
        };
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
    }
    AppComponent.prototype.setReturnOptions = function () {
        this.returnOptions = {
            dateFormat: 'dd.mm.yyyy',
            showTodayBtn: false,
            sunHighlight: true,
            disableUntil: {
                year: this.returnDate.getFullYear(),
                month: this.returnDate.getMonth() + 1,
                day: this.returnDate.getDate() - 1
            },
            showClearDateBtn: false,
            height: '50px',
            editableDateField: false,
            openSelectorOnInputClick: true,
            selectionTxtFontSize: '1.5em'
        };
    };
    AppComponent.prototype.ngOnInit = function () {
        this.windowSize = this.commonService.getWindowSize();
        console.info("Window size", this.windowSize);
        console.info("Today: ", this.today, this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
        this.setReturnOptions();
    };
    AppComponent.prototype.onDateChanged = function (event) {
        this.returnDate = new Date(event.jsdate);
        console.info("departDateValue: ", this.departDateValue);
        this.setReturnOptions();
        this.returnDateValue = { date: event.date };
        console.info("returnDateValue: ", this.returnDateValue);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'src/app/views/app.component.html',
        providers: [common_service_js_1.CommonService]
    }),
    __metadata("design:paramtypes", [common_service_js_1.CommonService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map