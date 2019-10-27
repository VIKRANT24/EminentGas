import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-device-without-profile',
  templateUrl: './add-device-without-profile.page.html',
  styleUrls: ['./add-device-without-profile.page.scss'],
})
export class AddDeviceWithoutProfilePage implements OnInit {
  types: SelectItem[];
  loRaLocationType: SelectItem[]
  selectedType :any = 'Keys'
  loRaLocationSelectedType:any
  activatedType:SelectItem[]
  activatedSelectype:any
  devicePropertiesStaMob:SelectItem[]
  devicePropertiesInOUt:SelectItem[]
  qosClass:SelectItem[]
  DownlinkType:SelectItem[]
  registrationType:SelectItem[]
  uplinkType:SelectItem[]
  devicePropertiesStaMobType:any
  devicePropertiesInOUtType:any
  qosClassType:any
  uplinkSelectType:any
  MacVersion: SelectItem[]
  keys = false
  QoS =true
packetStorage =true
LoRaParameters =true
LoRaLocation =true
Additional =true
  constructor(private modal:ModalController) { 
    this.selectedType = 'Keys'
    this.loRaLocationSelectedType = "Disable"
    this.types = [
      {label: 'Keys', value: 'Keys'},
      {label: 'QoS', value: 'QoS'},
      {label: 'Packet Storage', value: 'packetStorage'},
      {label: 'LoRa Parameters', value: 'LoRaParameters'},
      {label: 'LoRa Location', value: 'LoRa Location'},
      {label: 'Addtional', value: 'Additional'}]

      this.loRaLocationType = [
        {label:'Disable' , value: 'Disable'},
        {label:'Enable' , value: 'Enable'}
      ]

      this.activatedType = [
        {label:'Yes' , value: 'Yes'},
        {label:'No' , value: 'No'}
      ]

      this.devicePropertiesStaMob = [
        {label:'Not Specified' , value: 'NotSpecified'},
        {label:'Static' , value: 'Static'},
        {label:'Mobile' , value: 'Mobile'}
      ]
      this.devicePropertiesInOUt = [
        {label:'Not Specified' , value: 'NotSpecified'},
        {label:'Outdoor' , value: 'Outdoor'},
        {label:'Indoor' , value: 'Indoor'}
      ]
      this.qosClass = [
        {label:'0' , value: '0'},
        {label:'1' , value: '1'},
        {label:'2' , value: '2'},
        {label:'3' , value: '3'}
      ]
this.DownlinkType = [
  {label:'Yes' , value: 'Yes'},
  {label:'No' , value: 'No'}
]
this.registrationType = [
  {label:'Yes' , value: 'Yes'},
  {label:'No' , value: 'No'}
]
this.uplinkType = [
  {label:'Auto' , value: 'Auto'},
  {label:'1' , value: '1'},
  {label:'2' , value: '2'},
  {label:'3' , value: '3'},
  {label:'4' , value: '4'},
  {label:'5' , value: '5'},
  {label:'6' , value: '6'}
]

this.MacVersion = [
  {label:'Rev A' , value: 'revA'},
  {label:'Rev B' , value: 'revB'}
]
  }

  ngOnInit() {
  }
  closeModal(){
    this.modal.dismiss()
  }
  onOptionClick(event){
    var count = event.index
if(count == 0){
  this.keys = false
this.QoS = true
this.packetStorage = true
this.LoRaParameters = true
this.LoRaLocation = true
this.Additional = true
}
else if(count == 1){
  this.keys = true
this.QoS = false
this.packetStorage = true
this.LoRaParameters = true
this.LoRaLocation = true
this.Additional = true 
}else if(count == 2){
  this.keys = true
this.QoS = true
this.packetStorage = false
this.LoRaParameters = true
this.LoRaLocation = true
this.Additional = true
}
else if(count == 3){
  this.keys = true
this.QoS = true
this.packetStorage = true
this.LoRaParameters = false
this.LoRaLocation = true
this.Additional = true
}
else if(count == 4){
  this.keys = true
this.QoS = true
this.packetStorage = true
this.LoRaParameters = true
this.LoRaLocation = false
this.Additional = true
}
else if(count == 5){
  this.keys = true
this.QoS = true
this.packetStorage = true
this.LoRaParameters = true
this.LoRaLocation = true
this.Additional = false
}
  }

}
