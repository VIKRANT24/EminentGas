import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddDeviceModalPage } from './add-device-modal.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [AddDeviceModalPage]
})
export class AddDeviceModalPageModule {}
