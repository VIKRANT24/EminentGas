import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectdevicemodalPage } from '../selectdevicemodal/selectdevicemodal.page';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-deviceactivity',
  templateUrl: './deviceactivity.page.html',
  styleUrls: ['./deviceactivity.page.scss'],
})
export class DeviceactivityPage implements OnInit {
  public gridApi;
  public gridColumnApi;

  public columnDefs;
  public defaultColDef;
  public frameworkComponents;
  device:any;
  rowData1:any=[]; 
   rowData:any=[]; 
  rowSelection:any="multiple";
  datapackets:any=[];
  public amr_readings:any; 
  constructor(public modalController: ModalController,public firebaseService: FirebaseService) { 
    this.device = localStorage.getItem("viewdevice")

    this.getdatapackets(this.device)

    this.columnDefs = [
      {
        headerName: "Direction",
        field: "direction",
        width: 130,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        filter: false,
      // cellRendererFramework: CellCustomComponent,
      },
      // {
      //   headerName: "Time",
      //   field: "time",
      //   width: 250,
      //   filter:"agDateColumnFilter"
      // },
      {
        headerName: "FCNT",
        field: "fcnt",
        width: 250,
        filter: false,
      },
      {
        headerName: "Port",
        field: "port",
        width: 250,
      },
      {
        headerName: "Status",
        field: "status",
        width: 250,
        filter: false,
      },
      {
        headerName: "Data Rate",
        field: "data_rate",
        width: 250,
        filter: false,
      },
      {
        headerName: "RSSI",
        field: "rssi",
        width: 250,
        filter: false,
       }
      // {
      //   headerName: "Decrypted",
      //   field: "decrypted",
      //   width: 250,
      //   filter: false,
      // },
      // {headerName: 'Actions',
      //  field: 'action', 
      //  width: 330,
      //  filter: false},
       
    ];

  }

  getdatapackets(device)
  {
    
    // this.firebaseService.getDataPackets(device).subscribe(async result => {
    // var datapackets = result[0].payload.doc.data()
      
    // var  data= datapackets['data']
    // var  data_rate= datapackets['data_rate']
    // var  device= datapackets['device']
    // var direction= datapackets['direction']
    // var fcnt= datapackets['fcnt']
    // var port= datapackets['port']
    // var  rssi= datapackets['rssi']
    // var  time= datapackets['time']

    // this.datapackets.push({'data':data,'data_rate':data_rate,'device':device,'direction':direction,'fcnt':fcnt,'port':port,'rssi':rssi,'time':time})

    // this.rowData = this.datapackets
    // })

    this.firebaseService.getMethod("amr_readings.json","").then(data =>{
      this.amr_readings = JSON.parse(data)
      var cubic=""
      for (var key in this.amr_readings) {
        if(device == this.amr_readings[key].deveui)
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


          var direction= "Up"
    var fcnt= this.amr_readings[key].fcnt
    var port= this.amr_readings[key].port
    var  rssi= this.amr_readings[key].rssi
    var data_rate = this.amr_readings[key].dr_used
   

    this.datapackets.push({'data':data,'data_rate':data_rate,'device':device,'direction':direction,'fcnt':fcnt,'port':port,'rssi':rssi,})

    this.rowData = this.datapackets
          
    
          }
          else{
            console.log("no"+data[key].deveui);
          }
    }
      })
  }

  ngOnInit() {
  }

  async selectDevice() 
    {
      
      const modal = await this.modalController.create({
        component: SelectdevicemodalPage
      });
      return await modal.present();
    }

}
