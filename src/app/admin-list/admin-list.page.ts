import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.page.html',
  styleUrls: ['./admin-list.page.scss'],
})
export class AdminListPage implements OnInit {
  public gridApi;
  public gridColumnApi;
  
  public columnDefs;
  public defaultColDef;
  public frameworkComponents;
   rowData:any= [];
   rowSelection:any="multiple";
  
  constructor(public navCtrl:NavController, public alertController:AlertController,public toastController: ToastController) { }

  ngOnInit() {

    this.columnDefs = [
      {
        headerName: "SR No",
        field: "SRNo",
        width: 170,
      },
      {
        headerName: "Client Name",
        field: "ClientName",
        width: 170
      },
      {
        headerName: "Address",
        field: "Address",
        width: 170
      },
      {
        headerName: "No Of ARMS",
        field: "ARMS",
        width: 170
      },
      {
        headerName: "Authorized Person",
        field: "Person",
        width: 170,
       
      },
      {
        headerName: "No Of Wings",
        field: "Wings",
        width: 170,
       
      },
      {
        headerName: "No Of Flats",
        field: "Flats",
        width: 170,
        
      },
      {
        headerName: "Project Name",
        field: "pName",
        width: 170,
      
      },
      {
        headerName: "Account Detail",
        field: "aDetails",
        width: 170,
      },
      {
        headerName: "Email Id",
        field: "email",
        width: 170,
      
      },
      {
        headerName: "Mobile No",
        field: "mobile",
        width: 170,
      filter:false
      }
    ];

this.rowData=[
  {SRNo:'1',ClientName:'Saurabh',Address:'Address1',ARMS:'2',Person:'Person1',Wings:'3',Flats:'7',pName:'demo',aDetails:'data',email:'saurabh@gmail.com',mobile:'8390784356'},
  {SRNo:'2',ClientName:'Saurabh',Address:'Address1',ARMS:'2',Person:'Person1',Wings:'3',Flats:'7',pName:'demo',aDetails:'data',email:'saurabh@gmail.com',mobile:'8390784356'},
  {SRNo:'3',ClientName:'Saurabh',Address:'Address1',ARMS:'2',Person:'Person1',Wings:'3',Flats:'7',pName:'demo',aDetails:'data',email:'saurabh@gmail.com',mobile:'8390784356'},
  {SRNo:'4',ClientName:'Saurabh',Address:'Address1',ARMS:'2',Person:'Person1',Wings:'3',Flats:'7',pName:'demo',aDetails:'data',email:'saurabh@gmail.com',mobile:'8390784356'},
  {SRNo:'5',ClientName:'Saurabh',Address:'Address1',ARMS:'2',Person:'Person1',Wings:'3',Flats:'7',pName:'demo',aDetails:'data',email:'saurabh@gmail.com',mobile:'8390784356'},
  {SRNo:'6',ClientName:'Saurabh',Address:'Address1',ARMS:'2',Person:'Person1',Wings:'3',Flats:'7',pName:'demo',aDetails:'data',email:'saurabh@gmail.com',mobile:'8390784356'},
  {SRNo:'7',ClientName:'Saurabh',Address:'Address1',ARMS:'2',Person:'Person1',Wings:'3',Flats:'7',pName:'demo',aDetails:'data',email:'saurabh@gmail.com',mobile:'8390784356'},
  {SRNo:'8',ClientName:'Saurabh',Address:'Address1',ARMS:'2',Person:'Person1',Wings:'3',Flats:'7',pName:'demo',aDetails:'data',email:'saurabh@gmail.com',mobile:'8390784356'},
  {SRNo:'9',ClientName:'Saurabh',Address:'Address1',ARMS:'2',Person:'Person1',Wings:'3',Flats:'7',pName:'demo',aDetails:'data',email:'saurabh@gmail.com',mobile:'8390784356'},

]

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
          }
        }
      ]
    });

    await alert.present();
  }
}


  


 
