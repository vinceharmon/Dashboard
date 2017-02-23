import { Http, Headers } from '@angular/http';

import {WorkItem, WorkStepType, WorkStep, WorkItemRS} from '../shared/workitems.model';
import {SettingItem, Settings, SettingRS} from '../shared/settings.model';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

export class Server {

  //Properties
  public workItems : WorkItem[] = [];
  public settings : Settings = null;

  //Initialize data
  init() {

    //Set data
    this.dummyData();
  }

  //Dummy data
  dummyData() {

    console.log('Loading dummy data');

    //Example data 
    //Because the webservice calls are next exposed so just push dummy data
    var steps : WorkStep[] = [];

    steps.push(new WorkStep('Initial configuration data', 'powershell -c colldata'));
    steps.push(new WorkStep('Process', 'powershell -c processdata'));
    steps.push(new WorkStep('Finalize', 'powershell -c finalizedata'));

    for(var i=1; i<21; i++){

      if(i % 2 == 0)
        this.workItems.push(new WorkItem(i, 'Test work description: '+i+100, 'Work item: '+i+10, new Date(), steps ));
      else
        this.workItems.push(new WorkItem(i, 'Test work description: '+i+100, 'Work item: '+i+10, new Date(), [] ));
    } //end of for


    var list: SettingItem[] = [];

    list.push(new SettingItem('DeviceId', '098764'));
    list.push(new SettingItem('Timezone', 'Mountain Standard Time'));
    list.push(new SettingItem('Client', 'Sabastian'));
    list.push(new SettingItem('Country', 'USA'));
    list.push(new SettingItem('State', 'Colorado'));
    list.push(new SettingItem('Phone', '303.889.1200'));

    this.settings = new Settings(list);
  }

  //Get all the current work items
  getCurrentWorkItems(http:Http) {

    //Return an observable
    return new Observable<WorkItem[]>((subscriber: Subscriber<WorkItem[]>) => subscriber.next(this.workItems)).map(o => JSON.stringify(o));
  }

  //Get all the settings
  getCurrentSettings(http:Http) {

    //Return an observable
    return new Observable<Settings>((subscriber: Subscriber<Settings>) => subscriber.next(this.settings)).map(o => JSON.stringify(o));
  }

  //Delete work item
  deleteWorkItem(item: WorkItem){

    var rs:WorkItemRS = new WorkItemRS();
    rs.id = item.id;
    rs.msg = '';
    rs.success = true;

    //Return an observable
    return new Observable<WorkItemRS>((subscriber: Subscriber<WorkItemRS>) => subscriber.next(rs)).map(o => JSON.stringify(o));

    /*
    var json = JSON.stringify({
      id: item.id
    });

    var parm = 'json='+json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //http returns and observable, unwrap the data as json
    return this.http.delete('http://workitems.bmc.net' + parm, {
      headers: headers
    })
    .map( res => res.json())
    .subscribe(
      data => this.response = data,
      error => alert(error),
      () => console.log('Delete Completed'));

      */
  }

  //Update work item
  updateWorkItem(item: WorkItem){

    var rs:WorkItemRS = new WorkItemRS();
    rs.id = item.id;
    rs.msg = '';
    rs.success = true;

    //Return an observable
    return new Observable<WorkItemRS>((subscriber: Subscriber<WorkItemRS>) => subscriber.next(rs)).map(o => JSON.stringify(o));

    /*
    var json = JSON.stringify({
      id: item.id
    });

    var parm = 'json='+json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //http returns and observable, unwrap the data as json
    return this.http.post('http://workitems.bmc.net' + parm, {
      headers: headers
    })
    .map( res => res.json())
    .subscribe(
      data => this.response = data,
      error => alert(error),
      () => console.log('Post Completed'));

      */
  }

  //Update setting in storage
  updateSetting(item: SettingItem){

    var rs:SettingRS = new SettingRS();
    rs.name = item.name;
    rs.msg = '';
    rs.success = true;

    //Return an observable
    return new Observable<SettingRS>((subscriber: Subscriber<SettingRS>) => subscriber.next(rs)).map(o => JSON.stringify(o));

    /*
    var json = JSON.stringify({
      id: item.id
    });

    var parm = 'json='+json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //http returns and observable, unwrap the data as json
    return this.http.post('http://settings.bmc.net' + parm, {
      headers: headers
    })
    .map( res => res.json())
    .subscribe(
      data => this.response = data,
      error => alert(error),
      () => console.log('Post Completed'));

      */
  }

}



