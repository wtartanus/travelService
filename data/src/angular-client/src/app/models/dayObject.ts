import { Injectable } from '@angular/core';

@Injectable()
export class DayObject {
    public value: any;
    public display: string;
    public week: number;

    constructor(display: string, week: number) {
      this.display = display;
      this.week = week;
    }

    public setValue(value: any): void {
      this.value = value;
    }

}