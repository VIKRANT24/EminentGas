import { Component, OnInit } from '@angular/core';
import { IonicModule,ToastController,NavController, ModalController } from '@ionic/angular';
import { AddDeviceModalPage } from '../add-device-modal/add-device-modal.page';
import { AddDeviceWithoutProfilePage } from '../add-device-without-profile/add-device-without-profile.page';
import { FirebaseService } from '../services/firebase.service';
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
 

  constructor(public navCtrl:NavController,private router: Router,public firebaseService: FirebaseService,public toastController: ToastController,public navController: NavController,public modalController: ModalController) {
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
         this.router.navigateByUrl('/list');
         localStorage.setItem("username",this.userid)
         localStorage.setItem("pwd",this.pwd)
       // this.router.navigate([ 'list', { id: this.userid } ]);
       // this.navCtrl.navigateForward('list',{'data':'dsd'})
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
   async presentModal() {

    // const modal = await this.modalController.create({
    //   component: AddDeviceModalPage,
    //   cssClass: 'my-custom-modal-css'
    // });
    // return await modal.present();


   // this.route.navigateByUrl('/add-device-modal');
}
}
