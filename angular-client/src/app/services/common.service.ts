import {Injectable} from '@angular/core';

@Injectable()
export class CommonService {
   private width = 0;
   getWindowSize(): {} {
     const windowSize = {
        width: window.innerWidth,
        height: window.innerHeight
     }
     this.width = windowSize.width;
     return windowSize;
   }
   
   getWindowWidth(): number {
       return this.width;
   }
}