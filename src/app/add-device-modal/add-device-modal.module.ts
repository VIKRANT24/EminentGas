import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {SelectButtonModule} from 'primeng/selectbutton';
import { AddDeviceModalPage } from './add-device-modal.page';
import { DropdownModule } from 'primeng/dropdown';


const routes: Routes = [
  {
    path: '',
    component: AddDeviceModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectButtonModule,
    DropdownModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddDeviceModalPage]
})
export class AddDeviceModalPageModule {}
