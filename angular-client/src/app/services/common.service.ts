import {Injectable} from '@angular/core';
import { WindowSize } from './../models/windowSize.js';

@Injectable()
export class CommonService {
    private windowSize = new WindowSize(window.innerWidth, window.innerHeight);
   
    getWindowSize(): WindowSize {
        return this.windowSize;
    }
}