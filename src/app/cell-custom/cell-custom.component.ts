import { Component, OnInit } from '@angular/core';
import { ModalController,PopoverController } from '@ionic/angular';
import { Route,Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AddDevicePage } from '../add-device/add-device.page';
import { Events } from '@ionic/angular';
import { ActionsComponent } from '../actions/actions.component';
import { SuperdeviceactivityPage } from '../superdeviceactivity/superdeviceactivity.page';
//import { AddDeviceModalPage } from '../add-device-modal/add-device-modal.page';

@Component({
  selector: 'app-cell-custom',
  templateUrl: './cell-custom.component.html',
  styleUrls: ['./cell-custom.component.scss'],
})
export class CellCustomComponent implements OnInit {
  data: any;
  params: any;
  adminLogin:any
  checkLogin:any
 
  constructor(public events:Events,public modalController: ModalController,public router:Router,public popoverController:PopoverController, public firebaseservice:FirebaseService) { 
    this.checkLogin = localStorage.getItem('list')
    if(this.checkLogin == 'clientList' ){
    this.adminLogin = false
  }else{
    this.adminLogin = true
  }
}
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
  
  async viewRow() {
  let rowData = this.params;
  console.log(rowData);
  localStorage.setItem("viewdevice",rowData.data.deveui)
 
  if(this.checkLogin == 'clientList'){
    this.router.navigateByUrl('/deviceactivity');
  }else{
   // this.router.navigateByUrl('/superdeviceactivity');
   const modal = await this.modalController.create({
    component: SuperdeviceactivityPage,
    cssClass: 'my-custom-modal-css',
    // componentProps: { 
    //   data: selected_row,
    // }
  });
  return await modal.present();
  }
 
 
  
  }

  deleteRow(){
    let rowData = this.params;
    console.log(rowData);
    this.firebaseservice.deleteARM(rowData.data.original,rowData.data.primary).then(data=>
      {
        this.events.publish('update_list');
        this.events.publish('amr_list');
      });
    }



 
async action(ev)
{
  // const popover = await this.popoverController.create({
  //   component: ActionsComponent,
  //   translucent: true
  // });
  // return await popover.present();

  const popover = await this.popoverController.create({
    component: ActionsComponent,
    event: ev,
    translucent: true,
    mode:'ios'
    
  });
  return await popover.present();
}







}
  
