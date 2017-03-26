import {Component, OnInit} from '@angular/core';

import {CommonService} from './../services/common.service.js';

@Component({
    selector: 'my-app',
    templateUrl: 'src/app/views/app.component.html',
    providers: [CommonService]
})
export class AppComponent implements OnInit {
   private windowSize = {};
   
   constructor(private commonService: CommonService) {}
   
   ngOnInit(): void {
       this.windowSize = this.commonService.getWindowSize();
       console.info("Window size", this.windowSize)
   }
}