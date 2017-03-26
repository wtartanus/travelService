import {Injectable} from '@angular/core';

@Injectable()
export class CommonService {
   
   getWindowSize(): {} {
     const windowSize = {
        width: window.innerWidth,
        height: window.innerHeight
     }
     
     return windowSize;
   }
   
}