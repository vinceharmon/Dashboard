import { Http, Headers } from '@angular/http';
import {Server} from './fakeServer';

export class Request {

  //Create dummy server
  public server: Server = new Server();

  //Constructor
  constructor() { 

    //Initialize
    this.server.init()
  }
  
  //Post 
  post (http:Http, endpoint, data) {
    switch (endpoint) {
       case '/workitems.local':
         return this.server.updateWorkItem(data);
       case '/settings.local':
         return this.server.updateSetting(data);
      default:
        break
    }
  }

  //Delete 
  delete (http:Http, endpoint, data) {
    switch (endpoint) {
      case '/workitems.local':
        return this.server.deleteWorkItem(data);
      default:
        break
    }
  }

  //Get
  get (http:Http, endpoint) {
    switch (endpoint) {
      case '/workitems.local':
        return this.server.getCurrentWorkItems(http);
      case '/settings.local':
        return this.server.getCurrentSettings(http);
      default:
        break
    }
  }
}

let fakeRequest: Request = new Request();

export default fakeRequest