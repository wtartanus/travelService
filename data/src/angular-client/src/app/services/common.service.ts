import {Injectable} from '@angular/core';
import { WindowSize } from './../models/windowSize.js';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonService {
    public http: Http;
    private windowSize = new WindowSize(window.innerWidth, window.innerHeight);
    constructor(http: Http) {
       this.http = http;
    }
   
    getWindowSize(): WindowSize {
        return this.windowSize;
    }
  
    getRequest(url: string): any {
       return this.http.get(url)
         .map(res => res.json());
    }
}