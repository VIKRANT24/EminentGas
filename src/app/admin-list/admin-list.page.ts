import { Component, OnInit,ViewChild} from '@angular/core';
import { NavController, AlertController, ToastController, ModalController, } from '@ionic/angular';
import { AddAdminPage } from '../add-admin/add-admin.page';
import { FirebaseService } from '../services/firebase.service';
import { AgGridAngular } from 'ag-grid-angular';
import { Events } from '@ionic/angular';
@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.page.html',
  styleUrls: ['./admin-list.page.scss'],
})
export class AdminListPage implements OnInit {
 // @ViewChild('agGrid',{static: false}) agGrid: AgGridAngular;


  public gridApi;
  public gridColumnApi;
  
  public columnDefs;
  public defaultColDef;
  public frameworkComponents;
   rowData1:any=[]; 
   rowData:any=[]; 
   rowSelection:any="multiple";
   items: Array<any>;
  constructor(public navCtrl:NavController, public alertController:AlertController,public toastController: ToastController,public modalController:ModalController,public firebaseService: FirebaseService,public events:Events) { 
    this.getData();

  }

 

  ngOnInit() {

    

    this.events.subscribe('update_list', (data) => {
      this.getData();
    });

    this.columnDefs = [
      // {
      //   headerName: "SR No",
      //   field: "SRNo",
      //   width: 100,
      //   filter:false,
      //   headerCheckboxSelection: true,
      //   headerCheckboxSelectionFilteredOnly: true,
      //   checkboxSelection: true
      // },
      {
        headerName: "Client Name",
        field: "client_name",
        width: 170,
        checkboxSelection: true
      },
      {
        headerName: "Address",
        field: "address",
        width: 170,
        filter:false
      },
      {
        headerName: "No Of ARMS",
        field: "no_of_arms",
        width: 100,
        filter:false
      },
      {
        headerName: "Authorized Person",
        field: "authorized_person",
        width: 170,
        filter:false
      },
      {
        headerName: "No Of Wings",
        field: "no_of_wings",
        width: 100,
        filter:false
      },
      {
        headerName: "No Of Flats",
        field: "no_of_flats",
        width: 100,
        filter:false
      },
      {
        headerName: "Project Name",
        field: "project_name",
        width: 170,
      
      },
      {
        headerName: "Account Detail",
        field: "account_details",
        width: 170,
        filter:false
      },
      {
        headerName: "Email Id",
        field: "email_id",
        width: 170,
      },
      {
        headerName: "Mobile No",
        field: "mobile",
        width: 170,
      }
    ];

   

  }

  editAdmin(){
this.navCtrl.navigateForward('/edit-admin')
  }
// deleteAdmin(){
//   this.navCtrl.navigateForward('/edit-admin')
// }
async deleteAdmin() {
    const alert = await this.alertController.create({
      header: 'Are you sure!',
      message: 'You want to delete admin',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.alertDisplay("1")
          }
        }
      ]
    });
    await alert.present();
  }
  async alertDisplay(data){
    if(data=="1"){
      const toast = await this.toastController.create({
        message: 'Admin Delete Successfully',
        duration: 2000,
        color:'medium'
      });
     toast.present();
    }
 
  }

  async AlertConfirmDelete() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Do you want to delete this admin ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');


            var selected_row = this.gridApi.getSelectedRows()
            this.firebaseService.deleteUser(selected_row[0].id)
  .then(
    res => {
      //this.router.navigate(['/home']);
      this.getData()
    },
    err => {
      console.log(err);
    }
  )
          }
        }
      ]
    });

    await alert.present();
  }

  async add()
  {
    const modal = await this.modalController.create({
      component: AddAdminPage
    });
    return await modal.present();
  }

  getData(){
    this.rowData1 = []
    this.rowData = []
    this.firebaseService.getUsers()
    .subscribe(result => {
     for(var i=0;i<result.length;i++)
    {
      var account_details = result[i].payload.doc.data()['account_details']
      var address = result[i].payload.doc.data()['address']
      var authorized_person = result[i].payload.doc.data()['authorized_person']
      var client_name = result[i].payload.doc.data()['client_name']
      var email_id = result[i].payload.doc.data()['email_id']
      var mobile =result[i].payload.doc.data()['mobile']
      var no_of_arms = result[i].payload.doc.data()['no_of_arms']
      var no_of_flats = result[i].payload.doc.data()['no_of_flats']
      var no_of_wings = result[i].payload.doc.data()['no_of_wings']
      var project_name =result[i].payload.doc.data()['project_name']
      var id = result[i].payload.doc.id
      this.rowData1.push({'account_details':account_details,'address':address,'authorized_person':authorized_person,'client_name':client_name,'email_id':email_id,'mobile':mobile,'no_of_arms':no_of_arms,'no_of_flats':no_of_flats,'no_of_wings':no_of_wings,'project_name':project_name,'id':id})

      
    }

    this.rowData = this.rowData1
    })
    
   
  }

  onGridReady(params)
  {
    this.gridApi=params.api;
    this.gridColumnApi=params.columnApi
  }



 async edit()
  {
    var selected_row = this.gridApi.getSelectedRows()

    const modal = await this.modalController.create({
      component: AddAdminPage,
      componentProps: { 
        data: selected_row,
      }
    });
    return await modal.present();
  
    
  }

 
  
}


  


 
