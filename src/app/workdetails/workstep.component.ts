import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

import { WorkStep, WorkStepType } from '../shared/workitems.model';

@Component({
  selector: 'app-workstep',
  templateUrl: './workstep.component.html'
})
export class WorkstepComponent implements OnInit {

  @Input() step: WorkStep = null;
  @Output() stepUpdated = new EventEmitter();

  private stateText:string = null;

  constructor() { }

  ngOnInit() { 

    //Get text for enum
    this.stateText = WorkStepType[this.step.state];
  }

  //Handle a name change
  namechange(event) {

    //Fire change event so parent can keep track there was a change
    this.stepUpdated.emit();
  }

  //Handle a command change
  commandchange(event) {

    //Fire change event so parent can keep track there was a change
    this.stepUpdated.emit();
  }

}

