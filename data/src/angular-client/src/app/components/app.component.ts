import {Component, OnInit} from '@angular/core';
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {CommonService} from './../services/common.service.js';
import { WindowSize } from './../models/windowSize.js';
import { Inspiration } from './../models/inspiration.js';

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
   public inspirations: Array<any>;
  
   constructor(private commonService: CommonService) {};
   
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
      this.commonService.getInspirations().then(inspirations => this.inspirations = inspirations);
    } 
   
   ngOnInit(): void {
       this.windowSize = this.commonService.getWindowSize();
       console.info("Window size", this.windowSize);
     
       this.getInspirations();
     
       if (this.windowSize.getWidth() >= 1200) {
           this.height = '38px';
           this.width = '90%';
       }
       
       this.departOptions = this.setOptions(false);
       this.returnOptions = this.setOptions(true);
   }

   
   onDateChanged(event: IMyDateModel) {
      this.returnDate = new Date(event.jsdate);
      console.info("departDateValue: ", this.departDateValue);
      this.setOptions(true);
      this.returnDateValue = { 
          date: event.date
       };
      console.info("returnDateValue: ", this.returnDateValue);
      console.log("lll", this.inspirations);
   }
   
}