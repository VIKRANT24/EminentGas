import { Component, OnInit,Input } from '@angular/core';
import  moment from 'moment';
import { FirebaseService } from '../services/firebase.service';
import { CellCustomComponent } from '../cell-custom/cell-custom.component';
import { AgGridAngular } from 'ag-grid-angular';
import { NavController, AlertController, ToastController, ModalController, } from '@ionic/angular';

@Component({
  selector: 'app-addarm',
  templateUrl: './addarm.page.html',
  styleUrls: ['./addarm.page.scss'],
})
export class AddarmPage implements OnInit{
  public gridApi;
  public gridColumnApi;

  public columnDefs;
  public defaultColDef;
  public frameworkComponents;
  rowData1:any=[]; 
  rowData:any=[]; 
  user_selected_arm:any=[]
  @Input() data: any;
  constructor(public firebaseService: FirebaseService, public toastController:ToastController, public modalCtrl:ModalController) { 
    this.getAMRDevices()


  }

  ngOnInit()
  {
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
        value: '2408',
        editable: true,
      },
      {
        headerName: "Meter no",
        field: "meter_no",
        width: 300,
        filter: false,
        value: '2408',
        editable: true,
      },
      {
        headerName: "Meter Default Value",
        field: "default_meter",
        width: 300,
        filter: false,
        value: '',
        editable: true,
      },
      {
        headerName: "AMR Default Value",
        field: "default_amr",
        width: 300,
        filter: false,
        value: '',
        editable: true,
      },
      
    ];
  }


  getAMRDevices()
  {
    this.firebaseService.getARM()
    .subscribe(result => {
      for(var i=0;i<result.length;i++)
      {
        var deveui = result[i].payload.doc.data()['deveui']
        var flat = ""
        var meter_no =  ""
        var default_meter = ""
        var default_amr = ""
        this.rowData1.push({'deveui':deveui,'flat':flat,'meter_no':meter_no,'default_meter':default_meter,'default_amr':default_amr})
      }
      this.rowData = this.rowData1
    })
  }

  onGridReady(params)
  {
    this.gridApi=params.api;
    this.gridColumnApi=params.columnApi
  }

  async add()
  {
    var selected_row = this.gridApi.getSelectedRows()
    if(selected_row.length>0)
    {
      
      if(selected_row[0].flat!=""&&selected_row[0].meter_no!=""&&selected_row[0].default_meter!=""&&selected_row[0].default_amr!="")
      {

       // this.user_selected_arm.push({'deveui':selected_row[0].deveui,'flat':selected_row[0].flat,'meter_no':selected_row[0].meter_no,'default_meter':selected_row[0].default_meter,'default_amr':selected_row[0].default_amr})
       var data_for_array = selected_row[0].deveui +"-"+selected_row[0].flat+"-"+selected_row[0].meter_no+"-"+selected_row[0].default_meter+"-"+selected_row[0].default_amr
       this.user_selected_arm.push(data_for_array)

        this.firebaseService.AddARM(selected_row[0].id,this.user_selected_arm)
        .then(result => {
          console.log(result)
        })
       
      }
      else
      {
        const toast = await this.toastController.create({
          message: 'Please enter all fields.',
          duration: 2000,
          color:'medium',
          position: 'top'
        });
       toast.present();
      }

  
    }
    else
    {
      const toast = await this.toastController.create({
        message: 'Please select AMR to add.',
        duration: 2000,
        color:'medium',
        position: 'top'
      });
     toast.present();
    }
   
  }

}
