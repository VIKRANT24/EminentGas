import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddDeviceWithoutProfilePage } from './add-device-without-profile.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [AddDeviceWithoutProfilePage]
})
export class AddDeviceWithoutProfilePageModule {}
