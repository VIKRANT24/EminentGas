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
  payloads:any="";
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
        headerName: "Time",
        field: "time",
        width: 250,
        filter: false,
      },
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
       },
       {
        headerName: "Cubic meter",
        field: "cubic",
        width: 250,
        filter: false,
       },
       {
        headerName: "Data",
        field: "data",
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

  refresh()
  {
    this.rowData1=[]; 
    this.rowData=[]; 
   this.datapackets=[];
   this.getdatapackets(this.device)
  }

  getdatapackets(device)
  {
    
  

    this.firebaseService.getMethod("amr_readings.json","").then(data =>{
      this.amr_readings = JSON.parse(data)
    // this.amr_readings = JSON.parse('{"-M0N4f0TmNKwscuC-Elp":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQAAAA4Bsg==","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"},"-M0N4f0TmNKwscuC-Elp1":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQAAAA4Bsg==","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"},"-M0N4f0TmNKwscuC-Elp2":{"confirmed":true,"cr_used":"4/5","dataFrame":"EQGy","data_format":"base64","decrypted":true,"devaddr":805313363,"deveui":"70b3d5f830001b53","device_redundancy":1,"dr_used":"SF12BW125","early":false,"fcnt":97,"freq":865402500,"id":1582025844799,"live":true,"port":200,"rssi":-114,"sf_used":12,"snr":-21,"time_on_air_ms":1318.912,"timestamp":"2020-02-18T11:37:24.799Z"}}')
      var cubic=""
      
      for (var key in this.amr_readings) {
        if(device == this.amr_readings[key].deveui)
          {
            var dataframe = this.amr_readings[key].dataFrame
           // var dataframe = "EQAAAA4Bsg=="
  
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
          cubic =  (decimal * 0.01).toString()
        }
        else
        {
          cubic = "0.00"
        }

          var direction= "Up"
    var fcnt= this.amr_readings[key].fcnt
    var port= this.amr_readings[key].port
    var  rssi= this.amr_readings[key].rssi
    var data_rate = this.amr_readings[key].dr_used
    var time = this.amr_readings[key].timestamp
   
   

    this.datapackets.push({'data':hex_value,'time':time,'data_rate':data_rate,'device':device,'direction':direction,'fcnt':fcnt,'port':port,'rssi':rssi,'cubic':cubic})

    this.rowData = this.datapackets
          
    
          }
          else{
            console.log("no"+this.amr_readings[key].deveui);
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

      modal.onDidDismiss().then((dataReturned) => {
        this.device=dataReturned.data[0].deveui
        this.datapackets=[]
        this.getdatapackets(dataReturned.data[0].deveui)
console.log(dataReturned.data[0].deveui)
      });
   
      
      return await modal.present();

    
     
    }
    
    onGridReady(params)
    {
      this.gridApi=params.api;
      this.gridColumnApi=params.columnApi
    }
  
    onBtnExport() {
      var params = getParams();
      // if (params.suppressQuotes || params.columnSeparator) {
      //   alert(
      //     "NOTE: you are downloading a file with non-standard quotes or separators - it may not render correctly in Excel."
      //   );
      // }
      this.gridApi.exportDataAsCsv(params);
    }
  }
  
  function getParams() {
    return {
      // suppressQuotes: getValue("#suppressQuotes"),
      // columnSeparator: getValue("#columnSeparator"),
      // customHeader: getValue("#customHeader"),
      // customFooter: getValue("#customFooter")
    };
  }
