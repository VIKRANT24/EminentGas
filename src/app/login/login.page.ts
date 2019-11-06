import { Component, OnInit } from '@angular/core';
import { IonicModule,ToastController,NavController, ModalController } from '@ionic/angular';
import { AddDeviceModalPage } from '../add-device-modal/add-device-modal.page';
import { AddDeviceWithoutProfilePage } from '../add-device-without-profile/add-device-without-profile.page';
import { Routes } from '@angular/router';
import { Route,Router } from '@angular/router';


const routes: Routes = [

 

  ];

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userid:any="";
  pwd:any="";
 
  constructor(public toastController: ToastController,public navController: NavController,public modalController: ModalController,private route: Router) {
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
   async presentModal() {

    // const modal = await this.modalController.create({
    //   component: AddDeviceModalPage,
    //   cssClass: 'my-custom-modal-css'
    // });
    // return await modal.present();


   // this.route.navigateByUrl('/add-device-modal');
}
}
