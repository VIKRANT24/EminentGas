import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AgGridModule } from "ag-grid-angular";
import { DeviceactivityPage } from './deviceactivity.page';
import { SelectdevicemodalPage } from '../selectdevicemodal/selectdevicemodal.page';


const routes: Routes = [
  {
    path: '',
    component: DeviceactivityPage
  },
  {
    path: '',
    component: SelectdevicemodalPage
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
  declarations: [DeviceactivityPage,SelectdevicemodalPage]
})
export class DeviceactivityPageModule {}
