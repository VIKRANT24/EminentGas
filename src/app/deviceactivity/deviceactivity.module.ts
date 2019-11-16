import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AgGridModule } from "ag-grid-angular";
import { DeviceactivityPage } from './deviceactivity.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceactivityPage
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
  declarations: [DeviceactivityPage]
})
export class DeviceactivityPageModule {}
