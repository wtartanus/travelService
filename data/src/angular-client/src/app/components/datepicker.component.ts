import {Component, OnInit} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment/moment';

import {CommonService} from './../services/common.service.js';
import { WindowSize } from './../models/windowSize.js';
import { DayObject } from './../models/dayObject.js';

@Component({
  selector: 'date-picker',
  templateUrl: 'src/app/views/datepicker.component.html',
  providers: [CommonService]
})
export class DatePickerComponent implements OnInit {
  public currentMonthMap: Map<number, DayObject[]> = new Map();
  public currentYear: Number;
  public currentMonth: string;
  public windowSize: WindowSize;
  public today: any;
  public firstDay: DayObject;


  ngOnInit(): void {
    this.today = moment();
    let firstDay = this.getFirstDayOfTheMonth(this.today);
    this.createMonth(firstDay);
    //console.log("this.currentMonth: ", this.currentMonthMap);
    this.changeMonth(true);
   // console.log("next month: ", this.currentMonthMap);
    this.changeMonth(false);
    this.changeMonth(false);
    console.log("previous month: ", this.currentMonthMap); 
  }

  getFirstDayOfTheMonth(dayMoment: any):  DayObject{
    let dayOfTheMonth = dayMoment.date() - 1;
    let value = dayMoment.clone().subtract(dayOfTheMonth, "days");
    let dispaly = value.format("DD");
    let week = value.week();

    let firstDay = new DayObject(dispaly, week);
    firstDay.setValue(value);
    return firstDay;
  }

  //used to create array of whole month, as parrameter pass name of the month
  createMonth(firstDay: DayObject): void {
    let day, week;
    let days: DayObject[] = new Array();

    days.push(firstDay);
    let run = true;
    let count = 0;
    while (run) {
      day = days[count].value.clone().add(1, 'day');
      week = day.week();
      if (days[days.length - 1].value.isSame(day, 'month')) {
         let newDay = new DayObject(day.format("DD"), week);
         newDay.setValue(day);
         days.push(newDay);
      } else {
        run = false;
      }
      count++;
    }

    //map to current moment, key: week number, value: DayObject[]

    for(var i = 0; i < days.length; i++) {
       if(!this.currentMonthMap[days[i].week]) {
          this.currentMonthMap[days[i].week] = new Array<DayObject>();
          this.currentMonthMap[days[i].week].push(days[i]);
       } else {
         this.currentMonthMap[days[i].week].push(days[i]);
       }
    }
  }

  
  changeMonth(nextMonth: boolean) {
    let keys = Object.keys(this.currentMonthMap);
    let firstDay;
    
    for(var i = 0; i < keys.length; i++) {
      if(this.currentMonthMap.hasOwnProperty(keys[i])) {
          firstDay = this.currentMonthMap[keys[i]][0];
          break;
      }
    }
    if(nextMonth) {
       firstDay.value.add(1, "M");
    } else {
       firstDay.value.subtract(1, "M");
    }

    firstDay = this.getFirstDayOfTheMonth(firstDay.value);
    this.currentMonthMap = new Map<number, DayObject[]>();
    this.createMonth(firstDay);
  } 
  

  previousMonth() {

  }

  listMonths() {

  }

  listYears() {

  }
}
