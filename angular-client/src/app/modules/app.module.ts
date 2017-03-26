import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {HttpModule}       from '@angular/http';

import {AppComponent} from './../components/app.component.js';

import {CommonService} from './../services/common.service.js';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [CommonService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
