import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddDeviceModalPage } from 'src/app/add-device-modal/add-device-modal.page'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalCtrl:ModalController) {}
  presentToast(){
   
  }

//   public openModal(){
//     var data = {
//        message : 'hello world'
//   };
//     var modalPage = this.modalCtrl.create('AddDeviceModalPage',data);
//     AddDeviceModalPage.present();
// }
}
