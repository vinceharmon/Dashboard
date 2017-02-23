import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import 'rxjs/add/operator/map';

import {WorkItem, WorkStepType, WorkStep, WorkItemRS} from './workitems.model';
import fakeRequest from '../server/fakeRequest';

@Injectable()
export class WorkitemsService {

  //Properties
  public workItems : WorkItem[] = [];
  public response : WorkItemRS;

  //Constructor
  constructor(private http:Http) { 
  }

  //Get all the current items
  getCurrentWorkItems() {

    if(this.workItems.length == 0) {

      //Returns and observable
      return fakeRequest.get(this.http, "/workitems.local")
       .map( res => this.workItems = JSON.parse(res));
    }
    else{

      //Return an observable
      return new Observable<WorkItem[]>((subscriber: Subscriber<WorkItem[]>) => subscriber.next(this.workItems))
      .map(o => JSON.stringify(o))
      .map( res => this.workItems = JSON.parse(res));
    }
  }

  //Delete work item
  delete(item: WorkItem){

    //See if item exists
    var idx = this.workItems.indexOf(item);

    //Item exists
    if(idx >= 0) {

      //Remove item from list
      this.workItems.splice(idx, 1);

      //Delete the item from the store
      return fakeRequest.delete(this.http, "/workitems.local", item)
        .map( res => this.response = JSON.parse(res));
    }
  }

  //Get work item from current list
  getItem(id:number){

    //Find in list
    var wi = this.workItems.find(i=> i.id == id);

    return(wi);
  }

  //Update work item
  update(item: WorkItem) {

    //Find the item using the id
    var f = this.workItems.find(c=> c.id == item.id);

    //Check to make sure found
    if(f != null) {

      //Get the index of the object
      var idx = this.workItems.indexOf(f);

      //Update the item
      this.workItems[idx] = item;

      //Update the item from the store
      return fakeRequest.post(this.http, "/workitems.local", item)
        .map( res => this.response = JSON.parse(res));
    }
  }

}
