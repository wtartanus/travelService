import {Injectable} from '@angular/core';
import { WindowSize } from './../models/windowSize.js';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Inspiration } from './../models/inspiration.js';

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
  
    getInspirations(): Promise<Inspiration[]> {
       return this.http.get("http://localhost:8080/travel-guide/data/inspirations")
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
    }
  
     private handleError(error: any): Promise<any> {
      console.error('An error occured', error);
      return Promise.reject(error.message || error);
     }
  
    private logger(item: any)  {
       console.log("sfsd",item);
    }
}