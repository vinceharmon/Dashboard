import { Component, OnInit } from '@angular/core';
import { WorkitemsService } from '../shared/workitems.service';
import {WorkItem, WorkStepType, WorkStep} from '../shared/workitems.model';

@Component({
  selector: 'app-workitems',
  templateUrl: './workitems.component.html',
  styles: []
})
export class WorkitemsComponent implements OnInit {

  public workItems : WorkItem[] = [];

  constructor(private service: WorkitemsService) { }

  ngOnInit() {

    //Get the work items from the service
    this.service.getCurrentWorkItems().subscribe(res => { this.workItems = res }, err => {}, () => {});
  }

  onRemove(item: WorkItem){

    //Call service 
    this.service.delete(item).subscribe( res => { console.log('Item deleted')}, err => {}, () => {});
  }

}
