import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectdevicemodalPage } from '../selectdevicemodal/selectdevicemodal.page';


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
  constructor(public modalController: ModalController) { 
    this.device = localStorage.getItem("viewdevice")
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
      {
        headerName: "Time",
        field: "time",
        width: 250,
        filter:"agDateColumnFilter"
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
        field: "rate",
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
        headerName: "Decrypted",
        field: "decrypted",
        width: 250,
        filter: false,
      },
      {headerName: 'Actions',
       field: 'action', 
       width: 330,
       filter: false},
       
    ];

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
