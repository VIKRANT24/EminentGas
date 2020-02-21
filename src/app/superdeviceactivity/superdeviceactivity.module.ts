import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from "ag-grid-angular";
import { IonicModule } from '@ionic/angular';
//import { SelectdevicemodalPage } from '../selectdevicemodal/selectdevicemodal.page';
import { SuperdeviceactivityPage } from './superdeviceactivity.page';

const routes: Routes = [
  {
    path: '',
    component: SuperdeviceactivityPage
  },
  // {
  //   path: '',
  //   component: SelectdevicemodalPage
  // }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgGridModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuperdeviceactivityPage]
})
export class SuperdeviceactivityPageModule {}
