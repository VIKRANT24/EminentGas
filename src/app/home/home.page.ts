import { Component } from '@angular/core';
import { IonicModule,ToastController, ModalController,NavController } from '@ionic/angular';
import {AddDeviceModalPage} from 'src/app/add-device-modal/add-device-modal.page'
import { AddDeviceWithoutProfilePage } from '../add-device-without-profile/add-device-without-profile.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
userid:any="";
pwd:any="";


  constructor(public toastController: ToastController,public navController: NavController,public modalCtrl:ModalController) {

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



  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddDeviceModalPage,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
      }
    });
    return await modal.present();
  }

}