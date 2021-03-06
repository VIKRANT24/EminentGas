import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddDeviceWithoutProfilePage } from './add-device-without-profile.page';
import {MultiSelectModule} from 'primeng/primeng';
import {SelectButtonModule} from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';


const routes: Routes = [
  {
    path: '',
    component: AddDeviceWithoutProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectButtonModule,
    DropdownModule,
    MultiSelectModule,
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class AddDeviceWithoutProfilePageModule {}
