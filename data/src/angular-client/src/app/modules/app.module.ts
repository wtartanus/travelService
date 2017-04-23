import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './../components/app.component.js';

import { CommonService } from './../services/common.service.js';
import { WindowSize } from './../models/windowSize.js';



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
  providers: [CommonService, WindowSize],
  bootstrap: [ AppComponent ]
})
export class AppModule { }