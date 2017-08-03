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
var common_service_js_1 = require("./../services/common.service.js");
var DatePickerComponent = (function () {
    function DatePickerComponent() {
        //TODO: currentMonthValues should be object with keys: week number and values arrays of days
        this.currentMonthValues = new Map();
    }
    /* ngOnInit(): void {
       this.today = moment();
       let dayOfTheMonth = this.today.date() - 1;
       this.firstDay = {
         value: this.today.clone().subtract(dayOfTheMonth, "days"),
         dispaly: this.today.clone().subtract(dayOfTheMonth, "days").format("DD"),
         week: this.today.clone().subtract(dayOfTheMonth, "days").week()
       }
       this.createMonth();
       console.log("this.currentMonth: ", this.currentMonthValues);
     }
   
     //used to create array of whole month, as parrameter pass name of the month
     createMonth(): void {
       let day, week;
   
       let run = true;
       let count = 0;
       while (run) {
         if(this.currentMonthValues.size === 0) {
            day = this.firstDay[value].clone()
         }
         day = this.currentMonthValues[count].value.clone().add(1, 'day');
         week = day.week();
         if (this.currentMonthValues[this.currentMonthValues.length - 1].value.isSame(day, 'month')) {
           this.currentMonthValues.push({
             value: day,
             display: day.format("DD"),
             week: week
           });
         } else {
           run = false;
         }
         count++;
       }
     }
   
     nextMonth() {
       let month = this.today.clone().add(1, "M");
       if(month.isAfter(this.state.today, "M")) {
         this.setState({
           leftArrowStyle: {dispaly: "initial"}
         });
       } else {
         this.setState({
           leftArrowStyle: {dispaly: "none"}
         });
       }
       var dayOfTheMonth = month.date() - 1;
       var firstDay = {
         value: month.clone().subtract(dayOfTheMonth,"days"),
         dispaly: month.clone().subtract(dayOfTheMonth,"days").format("DD"),
         week: month.clone().subtract(dayOfTheMonth, "days").week()
       }
   
       var days = this.getDays(firstDay);
       this.renderMonth(days, this.state.today);
       this.setState({
         currentMonth: month.format("MMMM YYYY"),
         month: month
       });
     } */
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