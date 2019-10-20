import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminListPage } from './admin-list.page';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {InputTextModule} from 'primeng/inputtext';

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
    NgxDatatableModule,
    InputTextModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminListPage]
})
export class AdminListPageModule {}
