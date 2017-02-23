import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../shared/settings.service';
import {SettingItem, Settings, SettingRS} from '../shared/settings.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  public settings : Settings = null;

  constructor(private service: SettingsService) { }

  ngOnInit() {

    //Get the settings from the service
    this.service.getCurrentSettings().subscribe(res => { this.settings = res }, err => {}, () => {});
  }

}
