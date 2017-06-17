import {Injectable} from '@angular/core';
import { WindowSize } from './../models/windowSize.js';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {CommonService} from './../services/common.service.js';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  private destination: string;
  private departure: string;
  private dateFrom: Date;
  private dateTo: Date;

  constructor(private http: Http, private commonService: CommonService) {};


  public setDestination(destination: string): void {
    this.destination = destination;
  }

  public setDeparture(departure: string): void {
    this.departure = departure;
  }

  public setDateFrom(dateFrom: Date): void {
    this.dateFrom = dateFrom;
  }

  public setDateTo(dateTo: Date): void {
    this.dateTo = dateTo;
  }

  getCityDescription(city: String): Promise<any> {
    //http://de.wikipedia.org/w/api.php?action=query&prop=revisions&titles=M%C3%BCnchen&rvprop=content&format=xml
    //city = city.indexOf(" ") > -1 ? city.split(" ").join("%20") : city;
    city = city.split(",")[0];
    if(city.indexOf(" ") > -1) {
       let afterSplit = city.split(" ");
       for (var i = 0; i < afterSplit.length; i++) {

          afterSplit[i] = afterSplit[i].charAt(0).toUpperCase() + afterSplit[i].slice(1);

       }

       city = afterSplit.join("%20");
    } else {
      city[0].toUpperCase();
    }

    let url = "http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=" + city;
    return this.http.get(url)
           .toPromise()
           .then(response => response.json())
           .catch(this.commonService.handleError);
  };
}
