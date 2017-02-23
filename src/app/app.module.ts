import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

import { WorkitemsService } from './shared/workitems.service';
import { SettingsService } from './shared/settings.service';

import { routing } from './app.routing';
import { WorkitemsComponent } from './workitems/workitems.component';
import { WorkdetailsComponent } from './workdetails/workdetails.component';
import { WorkstepComponent } from './workdetails/workstep.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingdetailComponent } from './settingdetail/settingdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkitemsComponent,
    WorkdetailsComponent,
    WorkstepComponent,
    SettingsComponent,
    SettingdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [WorkitemsService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
