import {Injectable, Input, OnChanges} from '@angular/core';
import { WindowSize } from './../models/windowSize.js';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {CommonService} from './../services/common.service.js';
var Cities = require("./../../../cities.js");
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  private destination: string;
  public destinationCorrect: boolean;
  private departure: string;
  private dateFrom: Date;
  private dateTo: Date;

  @Input() private resultDescription: string;

  constructor(private http: Http, private commonService: CommonService) {
    this.destinationCorrect = true;
   };


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

  sanitazeHtmlFromWiki(text: any) {
    let key = Object.keys(text.query.pages)[0];
    console.log("!!!", text);
    try {
      this.resultDescription = text.query.pages[key].extract.replace(/(<([^>]+)>)/ig, "");
      console.log("@@@", this.resultDescription);
    } catch (e) {
      console.log("wrong");
    }


  }

  getCityDescription(city: String): Promise<any> {
    city = city.split(",")[0];
    let found = false;
    for (var i = 0; i < Cities.length; i++) {
      var name = Cities[i].name;
      if (name.toLowerCase() === city.toLowerCase()) {
        found = true;
        break;
      }
    }
    this.destinationCorrect = found;
    if(!this.destinationCorrect) {
      return;
    }
    if (city.indexOf(" ") > -1) {
      let afterSplit = city.split(" ");
      for (var i = 0; i < afterSplit.length; i++) {
        afterSplit[i] = afterSplit[i].charAt(0).toUpperCase() + afterSplit[i].slice(1);
      }
      city = afterSplit.join("%20");
    } else {
      city[0].toUpperCase();
    }

    let url = "http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Poland&prop=city" ;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.commonService.handleError);
  };

  processSearch(city: String) {
    this.getCityDescription(city).then(result => this.sanitazeHtmlFromWiki(result));
  }
}
