"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var moment = require("moment/moment");
var common_service_js_1 = require("./../services/common.service.js");
var dayObject_js_1 = require("./../models/dayObject.js");
var DatePickerComponent = (function () {
    function DatePickerComponent() {
        this.currentMonthMap = new Map();
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        this.today = moment();
        var firstDay = this.getFirstDayOfTheMonth(this.today);
        this.createMonth(firstDay);
        //console.log("this.currentMonth: ", this.currentMonthMap);
        this.changeMonth(true);
        // console.log("next month: ", this.currentMonthMap);
        this.changeMonth(false);
        this.changeMonth(false);
        console.log("previous month: ", this.currentMonthMap);
    };
    DatePickerComponent.prototype.getFirstDayOfTheMonth = function (dayMoment) {
        var dayOfTheMonth = dayMoment.date() - 1;
        var value = dayMoment.clone().subtract(dayOfTheMonth, "days");
        var dispaly = value.format("DD");
        var week = value.week();
        var firstDay = new dayObject_js_1.DayObject(dispaly, week);
        firstDay.setValue(value);
        return firstDay;
    };
    //used to create array of whole month, as parrameter pass name of the month
    DatePickerComponent.prototype.createMonth = function (firstDay) {
        var day, week;
        var days = new Array();
        days.push(firstDay);
        var run = true;
        var count = 0;
        while (run) {
            day = days[count].value.clone().add(1, 'day');
            week = day.week();
            if (days[days.length - 1].value.isSame(day, 'month')) {
                var newDay = new dayObject_js_1.DayObject(day.format("DD"), week);
                newDay.setValue(day);
                days.push(newDay);
            }
            else {
                run = false;
            }
            count++;
        }
        //map to current moment, key: week number, value: DayObject[]
        for (var i = 0; i < days.length; i++) {
            if (!this.currentMonthMap[days[i].week]) {
                this.currentMonthMap[days[i].week] = new Array();
                this.currentMonthMap[days[i].week].push(days[i]);
            }
            else {
                this.currentMonthMap[days[i].week].push(days[i]);
            }
        }
    };
    DatePickerComponent.prototype.changeMonth = function (nextMonth) {
        var keys = Object.keys(this.currentMonthMap);
        var firstDay;
        for (var i = 0; i < keys.length; i++) {
            if (this.currentMonthMap.hasOwnProperty(keys[i])) {
                firstDay = this.currentMonthMap[keys[i]][0];
                break;
            }
        }
        if (nextMonth) {
            firstDay.value.add(1, "M");
        }
        else {
            firstDay.value.subtract(1, "M");
        }
        firstDay = this.getFirstDayOfTheMonth(firstDay.value);
        this.currentMonthMap = new Map();
        this.createMonth(firstDay);
    };
    DatePickerComponent.prototype.previousMonth = function () {
    };
    DatePickerComponent.prototype.listMonths = function () {
    };
    DatePickerComponent.prototype.listYears = function () {
    };
    return DatePickerComponent;
}());
DatePickerComponent = __decorate([
    core_1.Component({
        selector: 'date-picker',
        templateUrl: 'src/app/views/datepicker.component.html',
        providers: [common_service_js_1.CommonService]
    })
], DatePickerComponent);
exports.DatePickerComponent = DatePickerComponent;
//# sourceMappingURL=datepicker.component.js.map