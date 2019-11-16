import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminListPage } from './admin-list.page';
import { AddAdminPage } from '../add-admin/add-admin.page';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { AgGridModule } from "ag-grid-angular";

const routes: Routes = [
  {
    path: '',
    component: AdminListPage
  },
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
    TableModule,
    InputTextModule,
    DialogModule,
    AgGridModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminListPage,AddAdminPage]
})
export class AdminListPageModule {}
