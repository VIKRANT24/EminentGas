
import { Component, OnInit } from '@angular/core';
import { IonicModule,ToastController,NavController } from '@ionic/angular';
import { AddDeviceModalPage } from '../add-device-modal/add-device-modal.page';
//import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.page.html',
  styleUrls: ['./super-admin.page.scss'],
})
export class SuperAdminPage {

  userid:any="";
  pwd:any="";
  constructor(public navCtrl:NavController,private router: Router,public toastController: ToastController,public navController: NavController,public firebaseService: FirebaseService) {
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
      this.firebaseService.searchUsers(this.userid ,this.pwd).subscribe(async result => {
        if(result.length>0)
        {
          const toast = await this.toastController.create({
            message: 'Succesfully logged-in.',
            duration: 2000,
            color:'success',
            position: 'top'
          });
         toast.present();
         this.router.navigateByUrl('/admin-list');
         localStorage.setItem("admin",this.userid)
         //localStorage.setItem("pwd",this.pwd)
        }
        else
        {
          const toast = await this.toastController.create({
            message: 'Invalid Email or Password.',
            duration: 2000,
            color:'danger',
            position: 'top'
          });
         toast.present();
        }
      })
    
 
    }
   }
   


}








