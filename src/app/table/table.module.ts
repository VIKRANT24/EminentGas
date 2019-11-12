import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from "ag-grid-angular";
import { IonicModule } from '@ionic/angular';

import { TablePage } from './table.page';




const routes: Routes = [
  {
    path: '',
    component: TablePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgGridModule
  ],
  declarations: [TablePage]
})
export class TablePageModule {}
