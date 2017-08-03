import { Injectable } from '@angular/core';

@Injectable()
export class DayObject {
    public value: any;
    public display: any;
    public week: any;

    constructor(value: any, display: any, week: any) {
      this.value = value;
      this.display = display;
      this.week = week;
    }

}