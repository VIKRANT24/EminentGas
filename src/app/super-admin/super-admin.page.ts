import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule,ToastController,NavController } from '@ionic/angular';

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

    async login() {
  

      if(this.userid == "")
      {
         const toast = await this.toastController.create({
         message: 'Please enter User ID',
         duration: 2000,
         color:'medium'
       });
      toast.present();
      }
      else if(this.pwd == "")
      {
       const toast = await this.toastController.create({
         message: 'Please enter Password',
         duration: 2000,
         color:'medium'
       });
      toast.present();
      }
      else{
        this.navController.navigateForward('/menu-page');
   
      }
     }

}





