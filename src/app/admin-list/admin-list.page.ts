import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.page.html',
  styleUrls: ['./admin-list.page.scss'],
})
export class AdminListPage implements OnInit {
  cols: any[];
  constructor(public navCtrl:NavController, public alertController:AlertController,public toastController: ToastController) { }

  ngOnInit() {
    this.cols = [
      { field: 'SR No', header: 'SR No' },
      {field: 'Client Name', header: 'Client Name' },
      { field: 'Address', header: 'Address' },
      { field: 'No Of ARMS', header: 'No Of ARMS' },
      { field: 'Authorized Person', header: 'Authorized Person' },
      {field: 'No Of Wings', header: 'No Of Wings' },
      { field: 'No Of Flats', header: 'No Of Flats' },
      { field: 'Project Name', header: 'Project Name' },
      { field: 'Account Detail', header: 'Account Detail' },
      {field: 'Email Id', header: 'Email Id' },
      { field: 'Mobile No', header: 'Mobile No' }
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
}
