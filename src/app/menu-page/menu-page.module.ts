import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPagePage } from './menu-page.page';
import {ButtonModule} from 'primeng/button';

const routes: Routes = [
  {
    path: '',
    component: MenuPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPagePage]
})
export class MenuPagePageModule {}
