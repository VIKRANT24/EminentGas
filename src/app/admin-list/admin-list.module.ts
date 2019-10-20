import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminListPage } from './admin-list.page';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';


const routes: Routes = [
  {
    path: '',
    component: AdminListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableModule,
    InputTextModule,
    DialogModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminListPage]
})
export class AdminListPageModule {}
