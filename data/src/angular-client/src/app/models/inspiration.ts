import {Injectable} from '@angular/core';

import { Activity } from './../models/activity.js';

@Injectable()
export class Inspiration {
  public id: number;
  public cityId: string;
  public desc: string;
  public history: string;
  public activities: Activity[];
  
  constructor(id: number, cityId: string, desc: string, history: string, activities: Array<any>) {
    this.id = id;
    this.cityId = cityId;
    this.desc = desc;
    this.history = history;
    
    for(var a in activities) {
      let activity = new Activity(a["id"], a["cityId"], a["city"], a["description"], a["photoLink"], a["address"]);
      this.activities.push(activity);
    }
  }
}