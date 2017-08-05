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
   // this.changeMonth(true);
   // console.log("next month: ", this.currentMonthMap);
   // this.changeMonth(false);
   // this.changeMonth(false);
    console.log("previous month: ", this.currentMonthMap); 
  }

  getFirstDayOfTheMonth(dayMoment: any):  DayObject{
    let dayOfTheMonth = dayMoment.date() - 1;
    let value = dayMoment.clone().subtract(dayOfTheMonth, "days");
    let dispaly = value.format("DD");
    let week = value.week();

    let firstDay = new DayObject(dispaly, week, true);
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
         let newDay = new DayObject(day.format("DD"), week, true);
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
    
    this.populateEnds();
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
  
  populateEnds() {
    //get first and last week
    let firstWeek, lastWeek;
    
    let keys = Object.keys(this.currentMonthMap);
    for(var i = 0; i < keys.length; i++) {
      if(this.currentMonthMap.hasOwnProperty(keys[i])) {
        if(!firstWeek) {
          firstWeek = keys[i];
        }
        lastWeek = keys[i];
      }
    }

    let firstDay = this.currentMonthMap[firstWeek][0];
    let prevDay = firstDay.value.clone().subtract(1, "day");
    let week = firstDay.week;
    let count = 0;
    while(week === firstDay.week) {
      if(count > 0) {
        prevDay = prevDay.clone().subtract(1, "day");
      }
      console.log("@@@@", prevDay);
      if(prevDay.week() === firstDay.week) {
        let newDay = new DayObject(prevDay.format("DD"), prevDay.week(), false);
        newDay.setValue(prevDay);
        this.currentMonthMap[firstWeek].unshift(newDay);
      }
      week = prevDay.week();
      count++;
    }
    
    let last = this.currentMonthMap[lastWeek].length - 1;
    let lastDay = this.currentMonthMap[lastWeek][last];
    let nextDay = lastDay.value.clone().add(1, "day");
    week = lastDay.week;
    count = 0;
    while(week === lastDay.week) {
      if(count > 0) {
        nextDay = nextDay.clone().add(1, "day");
      }
      if(nextDay.week() === lastDay.week) {
        let newDay = new DayObject(nextDay.format("DD"), nextDay.week(), false);
        newDay.setValue(nextDay);
        this.currentMonthMap[lastWeek].push(newDay);
      }
      week = nextDay.week();
      count++;
    } 
  }

  listMonths() {
    

  }

  listYears() {

  }
}
