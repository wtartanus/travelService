import {Component, OnInit} from '@angular/core';
import {IMyOptions, IMyDateModel} from 'mydatepicker';


import {CommonService} from './../services/common.service.js';

@Component({
    selector: 'my-app',
    templateUrl: 'src/app/views/app.component.html',
    providers: [CommonService]
})
export class AppComponent implements OnInit {
   windowSize = {};
   showNav = false;
   private today = new Date();
   returnDate = new Date();
   private returnOptions: IMyOptions = {};
   private departOptions: IMyOptions = {};
   private width = '100%';
   private height = '50px';
   
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
  
   constructor(private commonService: CommonService) {
   }
   
   ngOnInit(): void {
       this.windowSize = this.commonService.getWindowSize();
       //let size = this.commonService.getWindowWidth();
       console.info("Window size", this.windowSize)
       
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
   }
   
}