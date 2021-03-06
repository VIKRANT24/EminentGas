import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminListPage } from './admin-list.page';
import { AddAdminPage } from '../add-admin/add-admin.page';
import { DeviceActivitySuperadminPage } from '../device-activity-superadmin/device-activity-superadmin.page';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { AgGridModule } from "ag-grid-angular";
import { ListSuperadminPage } from '../list-superadmin/list-superadmin.page';
import { AddarmPage } from '../addarm/addarm.page'
const routes: Routes = [
  {
    path: '',
    component: AdminListPage
  },
  {
    path: '',
    component: AddAdminPage
  },
  {
    path: '',
    component: ListSuperadminPage
  }
  ,
  {
    path: '',
    component: AddarmPage
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
  declarations: [AdminListPage,AddAdminPage,ListSuperadminPage,AddarmPage]
})
export class AdminListPageModule {}
