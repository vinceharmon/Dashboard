import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/Router';

import { WorkitemsService } from '../shared/workitems.service';
import {WorkItem, WorkStepType, WorkStep} from '../shared/workitems.model';

import {WorkstepComponent} from './workstep.component';

@Component({
  selector: 'app-workdetails',
  templateUrl: './workdetails.component.html'
})
export class WorkdetailsComponent implements OnInit {

  public item: WorkItem = null;
  public id: number;
  public detailForm = this.fb.group({
    name: ["", Validators.required],
    description: ["", Validators.required]
  });

  public bName: boolean = false;
  public bDesc: boolean = false;
  public bStepChanged: boolean = false;

  //Inject
  constructor(private fb: FormBuilder, private activateRoute: ActivatedRoute, private service: WorkitemsService, private router: Router) {

    //Get the parameter
    this.activateRoute.params.subscribe(p=> this.id = p['id']);
  }

  ngOnInit() {

    //Get the item from the service
    var wi = this.service.getItem(this.id);

    //Make a copy that is being edited in case the edit is tossed
    this.item = new WorkItem(wi.id, wi.description, wi.name, wi.date, wi.steps);
  }

  //Step update notification
  stepUpdated(event){

    //Indicate a step has changed
    this.bStepChanged = true;
  }

  //Save the changes if there are any
  doSave(event) {

    //Has the form changed or subcomponent changed
    if(this.detailForm.dirty || this.bStepChanged){

      //is name property valid
      if(!this.detailForm.controls['name'].valid) {
        this.bName = true;
      }

      //Is description property valid
      if(!this.detailForm.controls['description'].valid) {
        this.bDesc = true;
      }

      //Something missing, then get out
      if(this.bDesc || this.bName)
        return;

      //Update values
      this.item.name = this.detailForm.controls['name'].value;
      this.item.description = this.detailForm.controls['description'].value;

      //Update the data
      this.service.update(this.item).subscribe(
      res => { 
        console.log('Item updated'); 

        //Go back
        this.router.navigate(["/workitems"]);
      }, 
      err => {}, () => {});
    }
    //No dirty, just route
    else {

      //Go back
      this.router.navigate(["/workitems"]);
    }
  }

  //Cancel 
  doCancel(event) {

    //Go back
    this.router.navigate(["/workitems"]);
  }

}

