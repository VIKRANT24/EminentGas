import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AgGridModule } from "ag-grid-angular";
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { ListSuperadminPage } from './list-superadmin.page';

const routes: Routes = [
  {
    path: '',
    component: ListSuperadminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgGridModule,
    OverlayPanelModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ListSuperadminPageModule {}
