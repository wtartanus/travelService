import { Injectable } from '@angular/core';

@Injectable()
export class DayObject {
    public value: any;
    public display: string;
    public week: number;
    public isCurrentMonth: boolean;

    constructor(display: string, week: number, isCurrentMonth: boolean) {
      this.display = display;
      this.week = week;
      this.isCurrentMonth = isCurrentMonth;
    }

    public setValue(value: any): void {
      this.value = value;
    }

}