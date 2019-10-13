import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule,ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
userid:any="";
pwd:any="";
  constructor(public toastController: ToastController) {

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



//   public openModal(){
//     var data = {
//        message : 'hello world'
//   };
//     var modalPage = this.modalCtrl.create('AddDeviceModalPage',data);
//     AddDeviceModalPage.present();
// }

}