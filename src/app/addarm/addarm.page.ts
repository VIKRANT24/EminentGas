import { Component, OnInit,Input } from '@angular/core';
import  moment from 'moment';
import { FirebaseService } from '../services/firebase.service';
import { CellCustomComponent } from '../cell-custom/cell-custom.component';
import { AgGridAngular } from 'ag-grid-angular';
import { NavController, AlertController, ToastController, ModalController,Events } from '@ionic/angular';

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
  splitarm:any=[]
  constructor(public firebaseService: FirebaseService, public toastController:ToastController, public modalCtrl:ModalController,public events:Events) { 
   
    this.getAdminArm()


  }
  refreshAddArm(){
    this.getAdminArm()
    this.rowData1=[]; 
    this.rowData=[]; 
    this.user_selected_arm=[]
    this.events.publish('update_list');
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


  getAdminArm()
  {
    var user_data = JSON.parse(localStorage.getItem('selected_user'))
    this.firebaseService.searchUsers(user_data[0].email_id ,'Abc@123').subscribe(async result => {

      
      var dataresult = result[0].payload.doc.data()['no_of_arms']
      var primary_id=result[0].payload.doc.id
     // this.devices = dataresult.length
      for(var i = 0 ;i<dataresult.length;i++)
      {
        var splitdata = dataresult[i].split('-')
        var other_values = splitdata[1].split(',')

        var deveui = splitdata[0]
        var flat = other_values[0]
        var meter_no = other_values[1]
        var default_meter = other_values[2]
        var default_amr = other_values[3]
        var originalValue = dataresult[i]
        this.splitarm.push({deveui,flat,meter_no,default_meter,default_amr,originalValue,primary_id})
        this.rowData1.push({'deveui':deveui,'flat':flat,'meter_no':meter_no,'default_meter':default_meter,'default_amr':default_amr})
        var data_for_array = deveui +"-"+flat+","+meter_no+","+default_meter+","+default_amr
        this.user_selected_arm.push(data_for_array)

      }
     console.log( this.splitarm)
     this.getAMRDevices()
      //this.getDevices(this.splitarm)
    })


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
       var data_for_array = selected_row[0].deveui +"-"+selected_row[0].flat+","+selected_row[0].meter_no+","+selected_row[0].default_meter+","+selected_row[0].default_amr
       if(this.user_selected_arm.includes(data_for_array)==false)
       {
        this.user_selected_arm.push(data_for_array)

        this.firebaseService.AddARM(this.user_selected_arm)
        .then(result => {
          console.log(result)
        })
        const toast = await this.toastController.create({
          message: 'AMR deleted successfully.',
          duration: 2000,
          color:'medium',
          position: 'top'
        });
       toast.present();
       this.refreshAddArm()
       }
       else
       {
        const toast = await this.toastController.create({
          message: 'AMR already added.',
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
  async delete()
  {
    var selected_row = this.gridApi.getSelectedRows()
    if(selected_row.length>0)
    {
      
      if(selected_row[0].flat!=""&&selected_row[0].meter_no!=""&&selected_row[0].default_meter!=""&&selected_row[0].default_amr!="")
      {
       var data_for_array = selected_row[0].deveui +"-"+selected_row[0].flat+","+selected_row[0].meter_no+","+selected_row[0].default_meter+","+selected_row[0].default_amr
        this.firebaseService.adminDeleteARM(data_for_array)
        .then(result => {
          console.log(result)
        })
        this.refreshAddArm()
      }
      else
      {
        const toast = await this.toastController.create({
          message: 'Empty ARM can not be deleted',
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
        message: 'Please select AMR to delete.',
        duration: 2000,
        color:'medium',
        position: 'top'
      });
     toast.present();
    }
   
  }
}
