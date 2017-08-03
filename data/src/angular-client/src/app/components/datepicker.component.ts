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
  public currentMonth: Map<number, DayObject[]> = new Map();
  public currentYear: Number;
  public windowSize: WindowSize;
  public today: any;
  public firstDay: DayObject;


  ngOnInit(): void {
    this.initFirstDay();
    this.createMonth();
    console.log("this.currentMonth: ", this.currentMonth);
  }

  initFirstDay(): void {
    this.today = moment();
    let dayOfTheMonth = this.today.date() - 1;
    let value = this.today.clone().subtract(dayOfTheMonth, "days");
    let dispaly = this.today.clone().subtract(dayOfTheMonth, "days").format("DD");
    let week = this.today.clone().subtract(dayOfTheMonth, "days").week();

    this.firstDay = new DayObject(value, dispaly, week);
  }

  //used to create array of whole month, as parrameter pass name of the month
  createMonth(): void {
    let day, week;
    let days: DayObject[] = new Array();

    days.push(this.firstDay);
    let run = true;
    let count = 0;
    while (run) {
      day = days[count].value.clone().add(1, 'day');
      week = day.week();
      if (days[days.length - 1].value.isSame(day, 'month')) {
         days.push(new DayObject(day, day.format("DD"), week));
      } else {
        run = false;
      }
      count++;
    }
  }

  /*
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
  

  previousMonth() {

  }

  listMonths() {

  }

  listYears() {

  }
}
