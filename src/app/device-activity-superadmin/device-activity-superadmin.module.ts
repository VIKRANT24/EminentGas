import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from "ag-grid-angular";

import { IonicModule } from '@ionic/angular';

import { DeviceActivitySuperadminPage } from './device-activity-superadmin.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceActivitySuperadminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgGridModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeviceActivitySuperadminPage]
})
export class DeviceActivitySuperadminPageModule {}
