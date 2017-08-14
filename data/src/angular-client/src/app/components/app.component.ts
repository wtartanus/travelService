import {Component, OnInit, OnDestroy} from '@angular/core';
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/toPromise';

import { InspirationsComponent } from "./../components/inspirations.component.js";
import { DatePickerComponent } from "./../components/datepicker.component.js"

import {CommonService} from './../services/common.service.js';
import {SearchService} from './../services/search.service.js';
import {MessageService} from './../services/message.service.js';
import { WindowSize } from './../models/windowSize.js';
import { Inspiration } from './../models/inspiration.js';
declare var google: any;

@Component({
  selector: 'my-app',
  templateUrl: 'src/app/views/app.component.html',
  providers: [CommonService],
  entryComponents: [InspirationsComponent, DatePickerComponent]
})
export class AppComponent implements OnInit, OnDestroy {
  private showNav = false;
  private showModal = false;
  private today = new Date();
  private returnDate = new Date();
  private windowSize: WindowSize;
  private returnOptions: IMyOptions = {};
  private departOptions: IMyOptions = {};
  private width = '100%';
  private height = '50px';
  public destination: String;
  public substriction: Subscription;
  public message: any;

  constructor(private commonService: CommonService, private searchService: SearchService, private messageService: MessageService) { 
    this.substriction = this.messageService.getMessage().subscribe(message => this.message = message);
  };

  setOptions(isReturn: boolean) {
    let date = isReturn ? this.returnDate : this.today;
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
  }

  private departDateValue: Object = {
    date: {
      year: this.today.getFullYear(),
      month: this.today.getMonth() + 1,
      day: this.today.getDate()
    }
  };

  private returnDateValue: Object = {
    date: {
      year: this.today.getFullYear(),
      month: this.today.getMonth() + 1,
      day: this.today.getDate()
    }
  };

  ngOnInit(): void {
    this.windowSize = this.commonService.getWindowSize();
    let input = document.getElementById('locationTextField');
    let autocomplete = new google.maps.places.Autocomplete(input);
    if (this.windowSize.getWidth() >= 1200) {
      this.height = '56.79px';
      this.width = '100%';
    }

    this.departOptions = this.setOptions(false);
    this.returnOptions = this.setOptions(true);
  }

  ngOnDestroy(): void {
     this.substriction.unsubscribe();
  }


  onDateChanged(event: IMyDateModel): void {
    this.returnDate = new Date(event.jsdate);
    console.info("departDateValue: ", this.departDateValue);
    this.setOptions(true);
    this.returnDateValue = {
      date: event.date
    };
  }

  searchForInspiration(city: string): void {
    this.destination = city;
  }


 search() {
   let input = document.getElementById('locationTextField');
   this.destination = input["value"];
   this.searchService.processSearch(this.destination);
 }
}
