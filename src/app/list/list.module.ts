import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgGridModule } from "ag-grid-angular";
import { IonicModule } from '@ionic/angular';
import { ListPage } from './list.page';
import {OverlayPanelModule} from 'primeng/overlaypanel';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgGridModule,
    OverlayPanelModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ]),
  ],
  declarations: [ListPage]
})
export class ListPageModule {
  
}
