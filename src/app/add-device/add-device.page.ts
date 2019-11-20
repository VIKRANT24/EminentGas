import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {SelectItem} from 'primeng/api';


interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.page.html',
  styleUrls: ['./add-device.page.scss'],
})
export class AddDevicePage implements OnInit {
  addDeviceID:any = "";
  comment:any;
  keysDevice: SelectItem[];
  keyActivated:SelectItem[];
  service:City[]
  selectedService:City;
  selectedType = 'Profiles';

  types: any[];  
  cities: City[];
  selectedCity: City;
  profile = false
  key = true
  additional = true
  selectedkeyDevice:any="A"
  selectedkeyActivated:any="No"
  option:any = ""
  
  constructor(private modal:ModalController) { 
  

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

this.service = [
   {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
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
    this.types = [
      {label: 'Profiles', value: 'Profiles'},
      {label: 'Keys', value: 'Keys'},
      {label: 'Additional', value: 'Additional'}
  ];
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

  finalCall(){
 //alert(this.selectedType+"_"+"_"+this.addDeviceID+"_"+this.comment+"_"+this.selectedCity.code+"_"+this.selectedService.code+"_"+this.selectedkeyDevice+"_"+this.selectedkeyActivated+"_"+this.option)
 if(this.selectedType==undefined || this.selectedType=="" || this.addDeviceID==undefined || this.addDeviceID=="" || this.selectedCity.code==undefined || this.selectedCity.code==""
 || this.selectedService.code==undefined || this.selectedService.code=="" || this.selectedkeyDevice == undefined || this.selectedkeyDevice == ""  || this.selectedkeyActivated == undefined || this.selectedkeyActivated ==""
 || this.option ==undefined || this.option ==""){
   alert("Enter all Details")
 }else{
  alert("True")         //API Call
 }

}

closeModal(){
  this.modal.dismiss()
}
}

