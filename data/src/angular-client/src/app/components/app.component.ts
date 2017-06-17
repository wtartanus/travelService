import {Component, OnInit} from '@angular/core';
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {CommonService} from './../services/common.service.js';
import {SearchService} from './../services/search.service.js';
import { WindowSize } from './../models/windowSize.js';
import { Inspiration } from './../models/inspiration.js';
declare var google: any;

@Component({
  selector: 'my-app',
  templateUrl: 'src/app/views/app.component.html',
  providers: [CommonService]
})
export class AppComponent implements OnInit {
  private showNav = false;
  private showModal = false;
  private today = new Date();
  private returnDate = new Date();
  private windowSize: WindowSize;
  private returnOptions: IMyOptions = {};
  private departOptions: IMyOptions = {};
  private width = '100%';
  private height = '50px';
  public inspirations: Array<Inspiration>;
  public destination: String;
  public selectedInspiration: Inspiration;
  public selectedSideNav: string;
  public showPhot = false;

  constructor(private commonService: CommonService, private searchService: SearchService) { };

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

  getInspirations(): void {
    this.commonService.getInspirations().then(inspirations => this.inspirations = this.commonService.createInspirationsModel(inspirations)).then(function() {
      this.selectedInspiration = this.inspirations[0];
    }.bind(this));
    this.selectedSideNav = "displayDescription";
  }



  ngOnInit(): void {
    this.windowSize = this.commonService.getWindowSize();
    let input = document.getElementById('locationTextField');
    let autocomplete = new google.maps.places.Autocomplete(input);
    this.getInspirations();
    if (this.windowSize.getWidth() >= 1200) {
      this.height = '38px';
      this.width = '90%';
    }

    this.departOptions = this.setOptions(false);
    this.returnOptions = this.setOptions(true);
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

  changeItem(moveRight: boolean, item: string, inspirationIndex: number): void {
    let inspiration = inspirationIndex ? this.inspirations[inspirationIndex] : this.selectedInspiration;
    let value = item === "photoPosition" ? "photos" : "activities";
    if (moveRight) {
      let nowPosition = inspiration[item];
      nowPosition += 1;
      if (nowPosition > (inspiration[value].length - 1)) {
        nowPosition = 0;
      }
      inspiration[item] = nowPosition;
    } else {
      let nowPosition = inspiration[item];
      nowPosition -= 1;
      if (nowPosition < 0) {
        nowPosition = (inspiration[value].length - 1);
      }
      inspiration[item] = nowPosition;
    }
  }

  changeDisplay(item: string, inspirationIndex: number): void {
    let inspiration = inspirationIndex ? this.inspirations[inspirationIndex] : this.selectedInspiration;
    this.selectedSideNav = item;
    let keys = Object.keys(inspiration.menu);

    for (var i = 0; i < keys.length; i++) {
      if (inspiration.menu.hasOwnProperty(keys[i])) {
        if (keys[i] === item) {
          inspiration.menu[keys[i]] = true;
        } else {
          inspiration.menu[keys[i]] = false;
        }
      }
    }
  }

  getText(text: any) {
    console.log(text);
    let key = Object.keys(text.query.pages)[0];

    console.log("text: ", text.query.pages[key].extract.replace(/(<([^>]+)>)/ig,""));
  }

 search() {
   let input = document.getElementById('locationTextField');
   this.destination = input["value"];
   this.searchService.getCityDescription(this.destination).then( result => this.getText(result));
 }
}
