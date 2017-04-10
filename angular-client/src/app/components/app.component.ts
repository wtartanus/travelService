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
   private returnOptions: IMyOptions = {}
   
   setReturnOptions() {
      this.returnOptions = {
        dateFormat: 'dd.mm.yyyy',
        showTodayBtn: false,
        sunHighlight: true,
        disableUntil: {
            year: this.returnDate.getFullYear(), 
            month: this.returnDate.getMonth() + 1, 
            day: this.returnDate.getDate() - 1
            },
        showClearDateBtn: false,
        height: '50px',
        editableDateField: false,
        openSelectorOnInputClick: true,
        selectionTxtFontSize: '1.5em'
    }
   }
   
   private departOptions: IMyOptions = {
        dateFormat: 'dd.mm.yyyy',
        showTodayBtn: false,
        sunHighlight: true,
        disableUntil: {
            year: this.today.getFullYear(), 
            month: this.today.getMonth() + 1, 
            day: this.today.getDate() - 1
            },
        showClearDateBtn: false,
        height: '50px',
        editableDateField: false,
        openSelectorOnInputClick: true,
        selectionTxtFontSize: '1.5em'
    };
    
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
       console.info("Window size", this.windowSize)
       console.info("Today: ", this.today, this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
       this.setReturnOptions();
   }

   
   onDateChanged(event: IMyDateModel) {
       this.returnDate = new Date(event.jsdate);
      console.info("departDateValue: ", this.departDateValue);
      this.setReturnOptions();
      this.returnDateValue = { 
          date: event.date
       };
      console.info("returnDateValue: ", this.returnDateValue);
   }
   
}