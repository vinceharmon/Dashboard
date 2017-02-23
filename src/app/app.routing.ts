import { Routes, RouterModule } from '@angular/Router';

import {WorkitemsComponent} from './workitems/workitems.component';
import {WorkdetailsComponent} from './workdetails/workdetails.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingdetailComponent } from './settingdetail/settingdetail.component';

const APP_ROUTES : Routes = [
    { path: "", redirectTo: "/workitems", pathMatch: 'full'},
    { path: "workitems", component: WorkitemsComponent},
    { path: "workdetail/:id", component: WorkdetailsComponent},
    { path: "settings", component: SettingsComponent},
    { path: "settings/:name", component: SettingdetailComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
