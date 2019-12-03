import { Component} from '@angular/core';
import  moment from 'moment';
import data from '../../assets/company.json'
import { FirebaseService } from '../services/firebase.service';
import { CellCustomComponent } from '../cell-custom/cell-custom.component';
import { AgGridAngular } from 'ag-grid-angular';


import { NavController, AlertController, ToastController, ModalController, } from '@ionic/angular';


@Component({
  selector: 'app-selectdevicemodal',
  templateUrl: './selectdevicemodal.page.html',
  styleUrls: ['./selectdevicemodal.page.scss'],
})
export class SelectdevicemodalPage {

  public gridApi;
  public gridColumnApi;

  public columnDefs;
  public defaultColDef;
  public frameworkComponents;
  rowData1:any=[]; 
   rowData:any=[]; 
  rowSelection:any="multiple";
  devices:any;
  display=false;
   constructor(public firebaseService: FirebaseService, public toastController:ToastController, public modalCtrl:ModalController) { 
    var user = localStorage.getItem("username")
    var pwd = localStorage.getItem("pwd")

    this.getAdminArm(user,pwd)


    this.columnDefs = [
      {
        headerName: "DEVEUI",
        field: "deveui",
        width: 220,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      },
      {
        headerName: "Comment",
        field: "comment",
        width: 220,
      },
      {
        headerName: "Last Seen",
        field: "last_reception",
        width: 220,
        filter:"agDateColumnFilter"
      },

       
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
       var last_reception = moment(date_data).format("DD-MM-YYYY h:mm:ss")
        var groups =result[i].payload.doc.data()['groups']
        var applications =result[i].payload.doc.data()['applications']
        var tags =result[i].payload.doc.data()['tags']
        this.rowData1.push({'deveui':deveui,'devaddr':devaddr,'appeui':appeui,'comment':comment,'latitude':latitude,'longitude':longitude,'altitude':altitude,'device_status':device_status,'dl_fcnt':dl_fcnt,'lora_device_class':lora_device_class,'registration_status':registration_status,'expiry_time_uplink':expiry_time_uplink,'expiry_time_downlink':expiry_time_downlink,'last_reception':last_reception,'groups':groups,'applications':applications,'tags':tags})
      }
        
      }
      this.rowData = this.rowData1
    })
  }

  onGridReady(params)
  {
    this.gridApi=params.api;
    this.gridColumnApi=params.columnApi
  }

  async onOkClick()
  {
    var selected_row = this.gridApi.getSelectedRows()

    if(selected_row.length==0)
    {
      this.display=true
    }
    else
    {
      this.display=false
    }

   
  
    
  }
}

