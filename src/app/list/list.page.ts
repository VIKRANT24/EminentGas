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
  public amr_readings:any; 
  public columnDefs;
  public defaultColDef;
  public frameworkComponents;
  rowData1:any=[]; 
  rowData:any=[]; 
  rowSelection:any="multiple";
  devices:any;
  splitarm:any=[]; 
   constructor(public firebaseService: FirebaseService,public modalController: ModalController) { 
    var user = localStorage.getItem("username")
    var pwd = localStorage.getItem("pwd")

    this.getAdminArm(user,pwd)
    this.getAMRReadings()

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
        width: 300,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true
      },
      // {
      //   headerName: "Comment",
      //   field: "comment",
      //   width: 250,
      // },
      // {
      //   headerName: "Groups",
      //   field: "groups",
      //   width: 250,
      // },
      // {
      //   headerName: "Apps",
      //   field: "applications",
      //   width: 250,
      // },
      // {
      //   headerName: "Last Seen",
      //   field: "last_reception",
      //   width: 250,
      // },
      {
        headerName: "Flat no",
        field: "flat",
        width: 300,
        filter: false,
        value: '2408'
      },
      {
        headerName: "Cubic meter",
        field: "cubic",
        width: 300,
        filter: false,
        value: '1.34'
      },
      // {
      //   headerName: "Amount",
      //   field: "amount",
      //   width: 300,
      //   filter: false,
      //   value: '500'
      // },
      {headerName: 'Actions',
       field: 'action', 
       width: 300,
       filter: false,
       cellRendererFramework: CellCustomComponent
       //template: '<p-overlayPanel #op>Content</p-overlayPanel><button type="text" pButton label="Basic" (click)="op.toggle($event)">zxzzx</button>'
      },
       
    ];
    


   // this.rowData=data;
  }

  getAdminArm(user,pwd)
  {
    this.firebaseService.searchUsers(user ,pwd).subscribe(async result => {
      var dataresult = result[0].payload.doc.data()['no_of_arms']
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

  getAMRReadings()
  {
    this.firebaseService.getMethod("amr_readings.json","").then(data =>{
      this.amr_readings = JSON.parse(data)
      console.log(this.amr_readings)
      })
  }

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
        var cubic = "1.34"
        var flat = no_of_arms[i].flat
        
        this.rowData1.push({'deveui':deveui,'devaddr':devaddr,'appeui':appeui,'comment':comment,'latitude':latitude,'longitude':longitude,'altitude':altitude,'device_status':device_status,'dl_fcnt':dl_fcnt,'lora_device_class':lora_device_class,'registration_status':registration_status,'expiry_time_uplink':expiry_time_uplink,'expiry_time_downlink':expiry_time_downlink,'last_reception':last_reception,'groups':groups,'applications':applications,'tags':tags,'cubic':cubic,'flat':flat})
      }
      }
      this.rowData = this.rowData1

      for(var j = 0;j<this.rowData.length;j++)
      {
        this.cubic(this.rowData[j].deveui,j)
      }

    })
  }

  onGridReady(params) {
    this.gridApi = params.api; // To access the grids API
  }

  cubic(device,j)
  {
  //this.base64ToBase16("EQAAAA4Bsg==")
var data = this.amr_readings
var cubic =""
    // Object.keys(data).forEach(function(key) {
    //   if(device == data[key].deveui)
    //   {
    //     console.log("yes"+data[key].deveui);
    //     var dataframe = data[key].dataFrame
      
    //     console.log(this.rowData)

    //   }
    //   else{
    //     console.log("no"+data[key].deveui);
    //   }
    // });

    for (var key in data) {
      if(device == data[key].deveui)
        {
          //var dataframe = data[key].dataFrame
          var dataframe = "EQAAAA4Bsg=="

          var raw = atob(dataframe);

          var HEX = '';
        
          for ( var i = 0; i < raw.length; i++ ) {
        
            var _hex = raw.charCodeAt(i).toString(16)
        
            HEX += (_hex.length==2?_hex:'0'+_hex);
        
          }

        var hex_value =  HEX.toUpperCase();

        var hex=hex_value.substring(2, 10)
        var decimal=parseInt(hex,16); 
        cubic =  (decimal * 0.01).toString()
        var a = j
        this.rowData[j]["cubic"] = cubic
        this.gridApi.setRowData(this.rowData);
  
        }
        else{
          console.log("no"+data[key].deveui);
        }
  }



    

    // this.firebaseService.getDataPackets(this.rowData[j].deveui).subscribe(async result1 => {
    //   var cubic =""
    //   if(result1[0]!=undefined)
    //   {
    //     var datapackets = result1[0].payload.doc.data()
    //     var  data= datapackets['data']

    //     var hex=data.substring(2, 10)
    //     var decimal=parseInt(hex,16); 
    //     cubic =  (decimal * 0.01).toString()
    //     var a = j
    //     this.rowData[j]["cubic"] = cubic
    //     this.gridApi.setRowData(this.rowData);
    //   }
    //   else
    //   {
    //     cubic = "0.00"
    //     this.rowData[j]["cubic"] = cubic
    //     this.gridApi.setRowData(this.rowData);
    //   }
   

    // })
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

// base64ToBase16(base64) {
//   return window.atob(base64)
//       .split('')
//       .map(function (aChar) {
//         return ('0' + aChar.charCodeAt(0).toString(16)).slice(-2);
//       })
//      .join('')
//      .toUpperCase(); // Per your example output
// }

async base64ToBase16(base64) {

  var raw = atob(base64);

  var HEX = '';

  for ( var i = 0; i < raw.length; i++ ) {

    var _hex = raw.charCodeAt(i).toString(16)

    HEX += (_hex.length==2?_hex:'0'+_hex);

  }
  return HEX.toUpperCase();

}
}



