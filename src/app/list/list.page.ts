import { Component, OnInit } from '@angular/core';
import data from '../../assets/company.json'
import { FirebaseService } from '../services/firebase.service';
import  moment from 'moment';
import { CellCustomComponent } from '../cell-custom/cell-custom.component';
import { ModalController } from '@ionic/angular';
import { AddDevicePage } from '../add-device/add-device.page';
import { AddDeviceWithoutProfilePage } from '../add-device-without-profile/add-device-without-profile.page';
import { AddDeviceWOProfilePage } from '../add-device-woprofile/add-device-woprofile.page'
// declare var firebase;

// var config={
//   apiKey: 'AIzaSyCxk372bpVybPuj_5xKrB9Xy_vTD93REd4',
//   authDomaim : 'eminent-gas-tech.firebase',
//   databaseURL : 'https://eminent-gas-tech.firebaseio.com'
// };

// firebase.initializeApp(config)

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  public gridApi;
  public gridColumnApi;

  public columnDefs;
  public defaultColDef;
  public frameworkComponents;
  rowData1:any=[]; 
   rowData:any=[]; 
  rowSelection:any="multiple";
  devices:any;
   constructor(public firebaseService: FirebaseService,public modalController: ModalController) { 
    var user = localStorage.getItem("username")
    var pwd = localStorage.getItem("pwd")

    this.getAdminArm(user,pwd)

    // this.columnDefs = [
    //   {
    //     headerName: "Athlete",
    //     field: "athlete",
    //     width: 150,
    //     headerCheckboxSelection: true,
    //     headerCheckboxSelectionFilteredOnly: true,
    //     checkboxSelection: true
    //   },
    //   {
    //     headerName: "Age",
    //     field: "age",
    //     width: 150,
    //     filter: "agNumberColumnFilter"
    //   },
    //   {
    //     headerName: "Country",
    //     field: "country",
    //     width: 150
    //   },
    //   {
    //     headerName: "Year",
    //     field: "year",
    //     width: 150
    //   },
    //   {
    //     headerName: "Date",
    //     field: "date",
    //     filter:"agDateColumnFilter"
    //   },
    //   {
    //     headerName: "Sport",
    //     field: "sport",
    //     width: 150,
    //     filter:false
    //   },
    //   {
    //     headerName: "Gold",
    //     field: "gold",
    //     width: 150,
    //     filter: "agNumberColumnFilter"
    //   },
    //   {
    //     headerName: "Silver",
    //     field: "silver",
    //     width: 150,
    //     filter: "agNumberColumnFilter"
    //   },
    //   {
    //     headerName: "Bronze",
    //     field: "bronze",
    //     width: 150,
    //     filter: "agNumberColumnFilter"
    //   },
    //   {
    //     headerName: "Total",
    //     field: "total",
    //     width: 150,
    //     filter: false
    //   }
    // ];

    this.columnDefs = [
      {
        headerName: "DEVEUI",
        field: "deveui",
        width: 250,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      },
      {
        headerName: "Comment",
        field: "comment",
        width: 250,
      },
      {
        headerName: "Groups",
        field: "groups",
        width: 250,
      },
      {
        headerName: "Apps",
        field: "applications",
        width: 250,
      },
      {
        headerName: "Last Seen",
        field: "last_reception",
        width: 250,
        filter:"agDateColumnFilter"
      },
      {headerName: 'Actions',
       field: 'action', 
       width: 330,
       filter: false,
       cellRendererFramework: CellCustomComponent},
       
    ];
    


   // this.rowData=data;
  }

  getAdminArm(user,pwd)
  {
    this.firebaseService.searchUsers(user ,pwd).subscribe(async result => {
      var no_of_arms = result[0].payload.doc.data()['no_of_arms']
      this.devices = no_of_arms.length
      this.getDevices(no_of_arms)
    })


  }

  getDevices(no_of_arms)
  {
   
    this.firebaseService.getDevices()
    .subscribe(result => {
      var arms_array = no_of_arms.toString().split(",")
      for(var i=0;i<result.length;i++)
      {
        if(arms_array.includes(result[i].payload.doc.data()['deveui']))
        {
        var deveui = result[i].payload.doc.data()['deveui']
        var devaddr = result[i].payload.doc.data()['devaddr']
        var appeui = result[i].payload.doc.data()['appeui']
        var comment = result[i].payload.doc.data()['comment']
        var latitude = result[i].payload.doc.data()['latitude']
        var longitude =result[i].payload.doc.data()['longitude']
        var altitude = result[i].payload.doc.data()['altitude']
        var device_status = result[i].payload.doc.data()['device_status']
        var dl_fcnt = result[i].payload.doc.data()['dl_fcnt']
        var lora_device_class =result[i].payload.doc.data()['lora_device_class']
        var registration_status =result[i].payload.doc.data()['registration_status']
        var expiry_time_uplink =result[i].payload.doc.data()['expiry_time_uplink']
        var expiry_time_downlink =result[i].payload.doc.data()['expiry_time_downlink']
       // var last_reception = moment(result[i].payload.doc.data()['last_reception'].toInt()).format("DD-MM-YYYY h:mm:ss");
       var date_data = result[i].payload.doc.data()['last_reception']
       var last_reception = moment(11111).format("DD-MM-YYYY h:mm:ss")
        var groups =result[i].payload.doc.data()['groups']
        var applications =result[i].payload.doc.data()['applications']
        var tags =result[i].payload.doc.data()['tags']
        this.rowData1.push({'deveui':deveui,'devaddr':devaddr,'appeui':appeui,'comment':comment,'latitude':latitude,'longitude':longitude,'altitude':altitude,'device_status':device_status,'dl_fcnt':dl_fcnt,'lora_device_class':lora_device_class,'registration_status':registration_status,'expiry_time_uplink':expiry_time_uplink,'expiry_time_downlink':expiry_time_downlink,'last_reception':last_reception,'groups':groups,'applications':applications,'tags':tags})
      }
        
      }
      this.rowData = this.rowData1
    })
  }

  async addDevice() {

    const modal = await this.modalController.create({
      component: AddDevicePage,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();

    
   //this.router.navigateByUrl('/add-device');
}
async addDeviceWithoutProfile() {

  const modal = await this.modalController.create({
    component: AddDeviceWOProfilePage,
    cssClass: 'my-custom-modal-css'
  });
  return await modal.present();

  
 //this.router.navigateByUrl('/add-device');
}
}



