import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.page.html',
  styleUrls: ['./admin-list.page.scss'],
})
export class AdminListPage implements OnInit {
  cols: any[];
  data: any[];
  constructor(public navCtrl:NavController, public alertController:AlertController,public toastController: ToastController) { }

  ngOnInit() {
    
    this.cols = [
      { field: 'SR No', header: 'SR No',width: '5%' },
      {field: 'Client Name', header: 'Client Name',width: '9%' },
      { field: 'Address', header: 'Address',width: '15%' },
      { field: 'No Of ARMS', header: 'No Of ARMS',width: '5%' },
      { field: 'Authorized Person', header: 'Authorized Person',width: '9%' },
      {field: 'No Of Wings', header: 'No Of Wings' ,width: '5%'},
      { field: 'No Of Flats', header: 'No Of Flats',width: '5%' },
      { field: 'Project Name', header: 'Project Name' ,width: '9%'},
      { field: 'Account Detail', header: 'Account Detail',width: '15%' },
      {field: 'Email Id', header: 'Email Id',width: '14%' },
      { field: 'Mobile No', header: 'Mobile No',width: '9%' }
  ];
this.data=[
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
}
