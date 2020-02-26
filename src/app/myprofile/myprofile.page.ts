import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.page.html',
  styleUrls: ['./myprofile.page.scss'],
})

export class MyprofilePage implements OnInit {
  name:any="";
  email:any="";
  project_name:any="";
  mobile:any="";
  address:any="";
  loaderToShow: any;
  constructor(public loadingController: LoadingController,public firebaseService:FirebaseService) { 
    var emailid = localStorage.getItem('username')
    this.getUserDetails(emailid)
  }

  ngOnInit() {
  }


  showLoader() {
    this.loaderToShow = this.loadingController.create({
     // message: 'This Loader will Not AutoHide'
     spinner:'crescent',
     cssClass:'custom-loader-class'
    }).then((res) => {
      res.present();
  
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
  //  this.hideLoader();
  }
  
  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 4000);
  }

  getUserDetails(emailid)
  {
    this.showLoader()
    this.firebaseService.searchUsersByEmail(emailid)
    .subscribe(result => {
var data = result[0].payload.doc.data()
this.name=data['client_name']
this.email=data['email_id']
this.address=data['address']
this.mobile=data['mobile']
this.project_name=data['project_name']
this.hideLoader()
    })
  }

}
