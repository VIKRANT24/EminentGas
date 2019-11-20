import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Route,Router } from '@angular/router';
import { AddDevicePage } from '../add-device/add-device.page';
@Component({
  selector: 'app-cell-custom',
  templateUrl: './cell-custom.component.html',
  styleUrls: ['./cell-custom.component.scss'],
})
export class CellCustomComponent implements OnInit {
  data: any;
  params: any;
  constructor(public modalController: ModalController,public router:Router) { }
  
  agInit(params) {
  this.params = params;
  this.data =  params.value;
  }
  
  ngOnInit() {}
  
  
  async editRow(ev) {
  let rowData = this.params;
  let i = rowData.rowIndex;
  console.log(rowData);


  // const popover = await this.popoverController.create({
  //   component: 'popover-example-page',
  //   event: ev,
  //   translucent: true
  // });
  // return await popover.present();

  const modal = await this.modalController.create({
    component: AddDevicePage,
    cssClass: 'my-custom-modal-css'
  });
  return await modal.present();
  
  }
  
  viewRow() {
  let rowData = this.params;
  console.log(rowData);
  localStorage.setItem("viewdevice",rowData.data.appeui)
  this.router.navigateByUrl('/deviceactivity');
  
  }

 



}
  
