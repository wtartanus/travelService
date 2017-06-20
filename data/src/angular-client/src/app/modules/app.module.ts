import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './../components/app.component.js';

import { CommonService } from './../services/common.service.js';
import { SearchService } from './../services/search.service.js';
import {SearchResultService } from './../services/searchResult.service.js';
import { WindowSize } from './../models/windowSize.js';
import { Inspiration } from './../models/inspiration.js';
import { Activity } from './../models/activity.js';
import { City } from './../models/city.js';
import { Photo } from './../models/photo.js';
import { Weather } from './../models/weather.js';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    ChartModule.forRoot(require('highcharts'), require('highcharts/highcharts-3d'), require('highcharts/modules/exporting'))
  ],
  declarations: [
    AppComponent,
  ],
  providers: [CommonService, SearchService, SearchResultService, WindowSize, Inspiration, Activity, City, Photo, Weather],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
