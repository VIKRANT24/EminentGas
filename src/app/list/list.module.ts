import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ListPage } from './list.page';
import {TableModule} from 'primeng/table';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableModule,
    ButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ]),
    NgxDatatableModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {
  
}
