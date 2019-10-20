import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditAdminPage } from './edit-admin.page';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: EditAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputTextModule,
    CardModule,
    PanelModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditAdminPage]
})
export class EditAdminPageModule {}
