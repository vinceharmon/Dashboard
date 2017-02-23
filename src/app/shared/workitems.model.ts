export enum WorkStepType {
	Initial,
  Running,
  Success,
  Failed
}

export class WorkStep {

  public name: string;
  public command: string;
  public state: WorkStepType;

  constructor(name: string, command: string) { 
    this.name = name;
    this.command = command;
    this.state = WorkStepType.Initial;
  }

}

export class WorkItem {

  public id: number;
  public description: string;
  public name: string;
  public date: Date;
  public steps : WorkStep[];

  constructor(id: number, description: string, name: string, date: Date, steps: WorkStep[]) { 
    this.id = id;
    this.description = description;
    this.name = name;
    this.date = date;
    this.steps = steps;
  }

}

export class WorkItemRS {

  public id: number;
  public success: boolean;
  public msg: string;
}