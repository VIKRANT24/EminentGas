import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-add-device-modal',
  templateUrl: './add-device-modal.page.html',
  styleUrls: ['./add-device-modal.page.scss'],
})
export class AddDeviceModalPage implements OnInit {
  types: SelectItem[];

  selectedType: string;

  constructor(private modal:ModalController) { 

    this.types = [
      {label: 'A', value: 'A'},
      {label: 'B', value: 'B'},
      {label: 'C', value: 'C'}
  ];
  }

  ngOnInit() {
  }

  closeModal(){
    this.modal.dismiss()
  }

}
