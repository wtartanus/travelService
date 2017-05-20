import {Injectable} from '@angular/core';

import { Activity } from './../models/activity.js';
import { City } from './../models/city.js';
import { Photo } from './../models/photo.js';
import { Weather } from './../models/weather.js';

@Injectable()
export class Inspiration {
  public city: any;
  public photos: any;
  public weather: any;
  public activities: any;
  public some = "link";
  
//  constructor(city: {}) {
////    this.city = new City(city["id"], city["name"], city["history"], city["description"]);
////    
////    for(let p in photos) {
////      const photo = new Photo(p["id"], p["cityId"], p[this.some]);
////      this.photos.push(photo);
////    }
////    
////    this.weather = new Weather(weather["temperatures"]["id"], weather["temperatures"]["cityId"], weather["temperatures"]["values"]);
////    
////    for(let a in activities) {
////      const activity = new Activity(a["id"], a["cityId"], a["city"], a["description"], a["photoLink"], a["address"]);
////      this.activities.push(activity);
////    }
//    
//  }
  
}