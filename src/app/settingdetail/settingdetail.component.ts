import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/Router';

import { SettingsService } from '../shared/settings.service';
import {SettingItem, Settings, SettingRS} from '../shared/settings.model';

@Component({
  selector: 'app-settingdetail',
  templateUrl: './settingdetail.component.html',
})
export class SettingdetailComponent implements OnInit {

  public item: SettingItem = null;
  public name: string = null;
  public settingsForm = this.fb.group({
    value: ["", Validators.required]
  });

  public bValue: boolean = false;

  //Injecting all the relevant classes
  constructor(private fb: FormBuilder, private activateRoute: ActivatedRoute, private service: SettingsService, private router: Router) {

    //Get the name parameter
    this.activateRoute.params.subscribe(p=> this.name = p['name']);
  }

  ngOnInit() {

    //Get the item from the service
    var s = this.service.getItem(this.name);

    //Make a copy that is being edited in case the edit is tossed
    this.item = new SettingItem(s.name, s.value);
  }

  //Save the changes handler
  doSave(event) {

    //Has the form changed
    if(this.settingsForm.dirty){

      //Is value valid, if not get out
      if(!this.settingsForm.controls['value'].valid) {
        this.bValue = true;

        return;
      }

      //Save changes to property
      this.item.value = this.settingsForm.controls['value'].value;

      //Update the data, calling the service
      this.service.update(this.item).subscribe(
      res => { 
        console.log('Setting updated'); 

        //Go back
        this.router.navigate(["/settings"]);
      }, 
      err => {}, 
      () => {});
    }
    //No errors
    else {

      //Go back
      this.router.navigate(["/settings"]);
    }
  }

  //Cancel handler handler
  doCancel(event) {

    //Go back
    this.router.navigate(["/settings"]);
  }

}
