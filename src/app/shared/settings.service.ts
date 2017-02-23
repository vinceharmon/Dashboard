import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import 'rxjs/add/operator/map';

import {SettingItem, Settings, SettingRS} from './settings.model';
import fakeRequest from '../server/fakeRequest';

@Injectable()
export class SettingsService {

  //Properties
  public settings : Settings = null;
  public response : SettingRS;

  //Constructor
  constructor(private http:Http) { 

  }

  //Get all the current settings
  getCurrentSettings() {

    if(this.settings == null) {

      //Returns and observable
      return fakeRequest.get(this.http, "/settings.local")
       .map( res => this.settings = JSON.parse(res));
    }
    else{

      //Return an observable
      return new Observable<Settings>((subscriber: Subscriber<Settings>) => subscriber.next(this.settings))
      .map(o => JSON.stringify(o))
      .map( res => this.settings = JSON.parse(res));
    }
  }

  //Update setting
  update(item: SettingItem) {

    //Find the item using the name
    var f = this.settings.items.find(c=> c.name == item.name);

    //Check to make sure found
    if(f != null) {

      //Get the index of the object
      var idx = this.settings.items.indexOf(f);

      //Update the setting
      this.settings.items[idx] = item;

      //Update the item from the store
      return fakeRequest.post(this.http, "/settings.local", item)
        .map( res => this.response = JSON.parse(res));
    }
  }

  //Get setting from current list
  getItem(name:string){

    //Find in list
    var f = this.settings.items.find(i=> i.name == name);

    return(f);
  }

}
