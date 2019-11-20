import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddDeviceWOProfilePage } from './add-device-woprofile.page';
import {MultiSelectModule} from 'primeng/primeng';
import {SelectButtonModule} from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';


const routes: Routes = [
  {
    path: '',
    component: AddDeviceWOProfilePage
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
    RouterModule.forChild(routes)
  ],
  declarations: [AddDeviceWOProfilePage]
})
export class AddDeviceWOProfilePageModule {}
