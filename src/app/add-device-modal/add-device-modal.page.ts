import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {SelectItem} from 'primeng/api';


interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-add-device-modal',
  templateUrl: './add-device-modal.page.html',
  styleUrls: ['./add-device-modal.page.scss'],
})

export class AddDeviceModalPage implements OnInit {
  types: SelectItem[];
  keysDevice: SelectItem[];
  keyActivated:SelectItem[];
  selectedType:String;
  cities: City[];
  selectedCity: City;
  profile = false
  key = true
  additional = true



  constructor(private modal:ModalController) { 

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

    this.types = [
      {label: 'Profiles', value: 'Profiles'},
      {label: 'Keys', value: 'Keys'},
      {label: 'Additional', value: 'Additional'}
  ];
  this.keysDevice = [
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'}
];
this.keyActivated = [
  {label: 'Yes', value: 'Yes'},
  {label: 'No', value: 'No'},
 
];


 
  }

  ngOnInit() {
  }

  closeModal(){
    this.modal.dismiss()
  }
  onOptionClick(event){
    var count = event.index
if(count == 0){
  this.profile = false
  this.key = true 
  this.additional = true



}
else if(count == 1){
 this.key = false
 this.profile = true
 this.additional = true 
}else{
  this.key = true
  this.profile = true
  this.additional = false
}

  }

}
