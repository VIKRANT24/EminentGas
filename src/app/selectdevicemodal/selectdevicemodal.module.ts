import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectdevicemodalPage } from './selectdevicemodal.page';
import { AgGridModule } from "ag-grid-angular";
import {ButtonModule} from 'primeng/button';

const routes: Routes = [
  {
    path: '',
    component: SelectdevicemodalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    IonicModule,
    AgGridModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectdevicemodalPage]
})
export class SelectdevicemodalPageModule {}
