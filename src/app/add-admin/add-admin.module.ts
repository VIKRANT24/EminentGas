import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddAdminPage } from './add-admin.page';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {KeyFilterModule} from 'primeng/keyfilter';
import {MultiSelectModule} from 'primeng/primeng';

const routes: Routes = [
  {
    path: '',
    component: AddAdminPage
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
    KeyFilterModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MultiSelectModule
  ],
  declarations: []
})
export class AddAdminPageModule {}
