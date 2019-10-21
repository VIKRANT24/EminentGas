import { Component, OnInit } from '@angular/core';
import { IonicModule,ToastController,NavController } from '@ionic/angular';
import { AddDeviceModalPage } from '../add-device-modal/add-device-modal.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
