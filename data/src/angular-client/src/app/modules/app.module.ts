import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './../components/app.component.js';

import { CommonService } from './../services/common.service.js';
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
    MyDatePickerModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [CommonService, WindowSize, Inspiration, Activity, City, Photo, Weather],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
