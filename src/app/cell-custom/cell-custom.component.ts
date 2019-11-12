import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-cell-custom',
  templateUrl: './cell-custom.component.html',
  styleUrls: ['./cell-custom.component.scss'],
})
export class CellCustomComponent implements OnInit {
  data: any;
  params: any;
  constructor(public popoverController: PopoverController) { }
  
  agInit(params) {
  this.params = params;
  this.data =  params.value;
  }
  
  ngOnInit() {}
  
  
  async editRow(ev) {
  let rowData = this.params;
  let i = rowData.rowIndex;
  console.log(rowData);


  const popover = await this.popoverController.create({
    component: 'popover-example-page',
    event: ev,
    translucent: true
  });
  return await popover.present();
  
  }
  
  viewRow() {
  let rowData = this.params;
  console.log(rowData);
  }




}
  
