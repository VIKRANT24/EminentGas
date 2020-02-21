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
  public amr_readings:any; 
  rowData1:any=[]; 
   rowData:any=[]; 
  rowSelection:any="multiple";
  devices:any;
  display=false;
  splitarm:any=[]; 
   constructor(public firebaseService: FirebaseService, public toastController:ToastController, public modalCtrl:ModalController) { 
    var user = localStorage.getItem("username")
    var pwd = localStorage.getItem("pwd")
    this.getAMRReadings()
   // this.getAdminArm(user,pwd)


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
        headerName: "Flat no",
        field: "flat",
        width: 300,
        filter: false,
        value: '2408'
      },
      {
        headerName: "Meter no",
        field: "meter",
        width: 300,
        filter: false,
        value: '2408'
      },
      {
        headerName: "Cubic meter",
        field: "cubic",
        width: 300,
        filter: false,
        value: ''
      },

       
    ];
    


   // this.rowData=data;
  }

  // getAdminArm(user,pwd)
  // {
  //   this.firebaseService.searchUsers(user ,pwd).subscribe(async result => {
  //     var no_of_arms = result[0].payload.doc.data()['no_of_arms']
  //     this.devices = no_of_arms.length
  //     this.getDevices(no_of_arms)
  //   })


  // }

  getAMRReadings()
  {
    this.firebaseService.getMethod("amr_readings.json","").then(data =>{
      this.amr_readings = JSON.parse(data)
     // this.amr_readings = JSON.parse('{"-M0N4f0TmNKwscuC-Elp":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQAAAA4Bsg==","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"},"-M0N4f0TmNKwscuC-Elp1":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQAAAA4Bsg==","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"},"-M0N4f0TmNKwscuC-Elp2":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQGy","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"}}')

      var user = localStorage.getItem("username")
      var pwd = localStorage.getItem("pwd")
      this.getAdminArm(user,pwd)
      console.log(this.amr_readings)
      })
  }

  getAdminArm(user,pwd)
  {
    this.firebaseService.searchUsers(user ,pwd).subscribe(async result => {
      var dataresult = result[0].payload.doc.data()['no_of_arms']
      this.devices = dataresult.length
      for(var i = 0 ;i<dataresult.length;i++)
      {
        var splitdata = dataresult[i].split('-')
        var other_values = splitdata[1].split(',')

        var device = splitdata[0]
        var flat = other_values[0]
        var meterno = other_values[1]
        var meterdefault = other_values[2]
        var amrdefault = other_values[3]
        
        this.splitarm.push({device,flat,meterno,meterdefault,amrdefault})

      }
     
      this.getDevices(this.splitarm)
    })
  }


  // getDevices(no_of_arms)
  // {
   
  //   this.firebaseService.getDevices()
  //   .subscribe(result => {
  //     var arms_array = no_of_arms.toString().split(",")
  //     for(var i=0;i<result.length;i++)
  //     {
  //       if(arms_array.includes(result[i].payload.doc.data()['deveui']))
  //       {
  //       var deveui = result[i].payload.doc.data()['deveui']
  //       var devaddr = result[i].payload.doc.data()['devaddr']
  //       var appeui = result[i].payload.doc.data()['appeui']
  //       var comment = result[i].payload.doc.data()['comment']
  //       var latitude = result[i].payload.doc.data()['latitude']
  //       var longitude =result[i].payload.doc.data()['longitude']
  //       var altitude = result[i].payload.doc.data()['altitude']
  //       var device_status = result[i].payload.doc.data()['device_status']
  //       var dl_fcnt = result[i].payload.doc.data()['dl_fcnt']
  //       var lora_device_class =result[i].payload.doc.data()['lora_device_class']
  //       var registration_status =result[i].payload.doc.data()['registration_status']
  //       var expiry_time_uplink =result[i].payload.doc.data()['expiry_time_uplink']
  //       var expiry_time_downlink =result[i].payload.doc.data()['expiry_time_downlink']
  //      // var last_reception = moment(result[i].payload.doc.data()['last_reception'].toInt()).format("DD-MM-YYYY h:mm:ss");
  //      var date_data = result[i].payload.doc.data()['last_reception']
  //      var last_reception = moment(date_data).format("DD-MM-YYYY h:mm:ss")
  //       var groups =result[i].payload.doc.data()['groups']
  //       var applications =result[i].payload.doc.data()['applications']
  //       var tags =result[i].payload.doc.data()['tags']
  //       this.rowData1.push({'deveui':deveui,'devaddr':devaddr,'appeui':appeui,'comment':comment,'latitude':latitude,'longitude':longitude,'altitude':altitude,'device_status':device_status,'dl_fcnt':dl_fcnt,'lora_device_class':lora_device_class,'registration_status':registration_status,'expiry_time_uplink':expiry_time_uplink,'expiry_time_downlink':expiry_time_downlink,'last_reception':last_reception,'groups':groups,'applications':applications,'tags':tags})
  //     }
        
  //     }
  //     this.rowData = this.rowData1
  //   })
  // }

  getDevices(no_of_arms)
  {
   
    this.firebaseService.getDevices()
    .subscribe(result => {
      //var arms_array = no_of_arms.toString().split(",")
      for(var i=0;i<result.length;i++)
      {
        
       // if(no_of_arms.includes(result[i].payload.doc.data()['deveui']))
       if((no_of_arms.filter(e => e.device === result[i].payload.doc.data()['deveui']).length > 0))
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
        var last_reception = moment(date_data).format("DD/MM/YYYY h:mm:ss")
        var groups =result[i].payload.doc.data()['groups']
        var applications =result[i].payload.doc.data()['applications']
        var tags =result[i].payload.doc.data()['tags']
        var cubic = no_of_arms[i].amrdefault
        var flat = no_of_arms[i].flat
        var meter = no_of_arms[i].meterno
        
        this.rowData1.push({'deveui':deveui,'devaddr':devaddr,'appeui':appeui,'comment':comment,'latitude':latitude,'longitude':longitude,'altitude':altitude,'device_status':device_status,'dl_fcnt':dl_fcnt,'lora_device_class':lora_device_class,'registration_status':registration_status,'expiry_time_uplink':expiry_time_uplink,'expiry_time_downlink':expiry_time_downlink,'last_reception':last_reception,'groups':groups,'applications':applications,'tags':tags,'cubic':cubic,'flat':flat,'meter':meter})
      }
      }
      this.rowData = this.rowData1

      for(var j = 0;j<this.rowData.length;j++)
      {
        this.cubic(this.rowData[j].deveui,j)
      }

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

    this.modalCtrl.dismiss(selected_row);

   
  
    
  }

  cubic(device,j)
  {
  //this.base64ToBase16("EQAAAA4Bsg==")
var data = this.amr_readings
var cubic =""


    for (var key in data) {
      if(device == data[key].deveui)
        {
          var dataframe = data[key].dataFrame
          //var dataframe = "EQAAAA4Bsg=="

          var raw = atob(dataframe);

          var HEX = '';
        
          for ( var i = 0; i < raw.length; i++ ) {
        
            var _hex = raw.charCodeAt(i).toString(16)
        
            HEX += (_hex.length==2?_hex:'0'+_hex);
        
          }

        var hex_value =  HEX.toUpperCase();

        if(hex_value.length>10)
        {
        var hex=hex_value.substring(2, 10)
        var decimal=parseInt(hex,16); 
        var current_cubic = this.rowData[j].cubic;
        var cubic_readings =  (decimal * 0.01).toString();
        cubic = (+current_cubic + +cubic_readings).toString()
        }
        else
        {
          cubic = ""
          var current_cubic = this.rowData[j].cubic
          cubic = current_cubic + cubic
        }
        this.rowData[j]["cubic"] = cubic
        this.gridApi.setRowData(this.rowData);
  
        }
        else{
          console.log("no"+data[key].deveui);
        }
  }


  }
}


