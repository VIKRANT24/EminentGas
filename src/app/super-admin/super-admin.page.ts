
import { Component, OnInit } from '@angular/core';
import { IonicModule,ToastController,NavController } from '@ionic/angular';
import { AddDeviceModalPage } from '../add-device-modal/add-device-modal.page';
//import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.page.html',
  styleUrls: ['./super-admin.page.scss'],
})
export class SuperAdminPage {

  userid:any="";
  pwd:any="";
  constructor(public toastController: ToastController,public navController: NavController) {
  }

  ngOnInit() {
  }

  async login() {
  

    if(this.userid == "")
    {
       const toast = await this.toastController.create({
       message: 'Please enter User ID',
       duration: 2000,
       color:'medium',
       position: 'top'
     });
    toast.present();
    }
    else if(this.pwd == "")
    {
     const toast = await this.toastController.create({
       message: 'Please enter Password',
       duration: 2000,
       color:'medium',
       position: 'top'
     });
    toast.present();
    }
    else{
      this.navController.navigateForward('/admin-list')
    
     //error
     // const toast = await this.toastController.create({
     //   message: 'Your username or password was incorrect.',
     //   duration: 2000,
     //   color:'danger'
     // });
 
     //sucess
   //   const toast = await this.toastController.create({
   //     message: 'Your username or password was incorrect.',
   //     duration: 2000,
   //     color:'success'
   //   });
    //toast.present();
 
    }
   }
   


}








