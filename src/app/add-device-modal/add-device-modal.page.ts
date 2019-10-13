import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-device-modal',
  templateUrl: './add-device-modal.page.html',
  styleUrls: ['./add-device-modal.page.scss'],
})
export class AddDeviceModalPage implements OnInit {

  constructor(public modalCtrl :ModalController) { }


  ngOnInit() {
  }
closeModal(){
  this.modalCtrl.dismiss()
}
}
