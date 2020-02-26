import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Platform ,AlertController,MenuController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';
import { Route,Router } from '@angular/router';


// const config = {
//   apiKey: "AIzaSyCxk372bpVybPuj_5xKrB9Xy_vTD93REd4",
//   authDomain: "eminent-gas-tech.firebaseapp.com",
//   databaseURL: "https://eminent-gas-tech.firebaseio.com",
//   projectId: "eminent-gas-tech",
//   storageBucket: "eminent-gas-tech.appspot.com",
// };
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
 
information:any[];
automaticClose = false;
username:any;
constructor(public menuCtrl: MenuController,private httpData:HttpClient,public platform:Platform,public statusBar:StatusBar,public splashScreen:SplashScreen,public alertController:AlertController, private router: Router){
this.httpData.get('assets/menuItem.json').subscribe(res => {
  this.information =res['items'];
  this.information[0].open =false;
  this.initializeApp();
  this.username = localStorage.getItem('username')
});
}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
   // firebase.initializeApp(config);
  }

toggleSection(index){
this.information[index].open= !this.information[index].open;
if(this.information && this.information[index].open){
  this.information
  .filter((item, itemIndex) => itemIndex != index)
  .map(item =>item.open = false);

}
}


toggleItem(index,childIndex){
if(this.information[index].children[childIndex].name == "My Profile")
{
  this.menuCtrl.close();
  this.router.navigateByUrl('/myprofile');
}
else if(this.information[index].children[childIndex].name == "Manage Devices")

{
  this.menuCtrl.close();
  this.router.navigateByUrl('/list');
}
else if(this.information[index].children[childIndex].name == "Device Activity")

{
  this.menuCtrl.close();
  this.router.navigateByUrl('/deviceactivity');
}


}

async logout(){
  localStorage.removeItem("admin")
  const alert = await this.alertController.create({
    header: 'Logout !',
    message: 'Do you want to logout ?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          this.menuCtrl.close();
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Yes',
        handler: async () => {
          this.menuCtrl.close();
          this.router.navigateByUrl('/login');
        }
      }
    ]
  });
  await alert.present();


}



//   public devices: Array<{ name : string, icon : string}>    = [];
//    public groups: Array<{ name : string, icon : string}>    = [];
//    public profiles: Array<{ name : string, icon : string}>    = [];
//    public find: Array<{ name : string, icon : string}>    = [];
//    public accounts: Array<{ name : string, icon : string}>    = [];
//   flag:boolean = true
//    // public appPages = [
//   //   {
//   //     title: 'Devices',
//   //     url: '/devices',
//   //     icon: 'home'
//   //   },
//   //   {
//   //     title: 'Groups',
//   //     url: '/groups',
//   //     icon: 'list'
//   //   },
//   //   {
//   //     title: 'Application',
//   //     url: '/application',
//   //     icon: 'list'
//   //   },
//   //   {
//   //     title: 'Profiles',
//   //     url: '/profiles',
//   //     icon: 'list'
//   //   },
//   //   {
//   //     title: 'Find',
//   //     url: '/find',
//   //     icon: 'list'
//   //   },
//   //   {
//   //     title: 'Accounts',
//   //     url: '/accounts',
//   //     icon: 'list'
//   //   }
//   // ];


//   constructor(
//     private platform: Platform,
//     private splashScreen: SplashScreen,
//     private statusBar: StatusBar
//   ) {
//     this.initializeApp();


   
    
   
//   }

//   initializeApp() {
//     this.platform.ready().then(() => {
//       this.statusBar.styleDefault();
//       this.splashScreen.hide();
//     });
//   }

  
//   subList(value){
//     switch(value) { 
//       case "device": { 
// this.flag = false
//         this.accounts = []
//         this.find = []
//         this.groups =[]
//         this.profiles = []

//         this.devices = [
//           {
//               name : 'Manage Devices',
//               icon : 'construct',
//               //link : ServicesPage
//            },
//            {
//               name : 'Device Activity',
//               icon : 'folder-open',
//              // link : ServicesPage
//            },
//            {
//               name : 'Network Map',
//               icon : 'logo-apple',
//              // link : ServicesPage
//            },
//            {
//               name : 'Batch Registration',
//               icon : 'logo-android',
//               //link : ServicesPage
//            },
//         ]
//          break; 
//       } 
//       case "group": { 
//         this.accounts = []
//         this.find = []
//         this.devices =[]
//         this.profiles = []
//         this.groups = [
//           {
//               name : 'Manage Groups',
//               icon : 'construct',
//               //link : ServicesPage
//            },
//            {
//               name : 'Group Activity',
//               icon : 'folder-open',
//              // link : ServicesPage
//            },
//         ]
//          break; 
//       } 
//       case "profile": { 
//         this.accounts = []
//         this.find = []
//         this.groups =[]
//         this.devices = []
//         this.profiles = [
//           {
//               name : ' Device Profiles',
//               icon : 'construct',
//               //link : ServicesPage
//            },
//            {
//               name : 'Service Profiles',
//               icon : 'folder-open',
//              // link : ServicesPage
//            },
//         ]
      
//          break; 
//       }
//       case "find": { 
//         this.accounts = []
//         this.devices = []
//         this.groups =[]
//         this.profiles = []
//         this.find = [
//           {
//               name : 'Find Devices',
//               icon : 'construct',
//               //link : ServicesPage
//            },
//            {
//               name : 'Find Users',
//               icon : 'folder-open',
//              // link : ServicesPage
//            },
//         ]
//          break; 
//       } 
//       case "account": { 
//         this.devices = []
//         this.find = []
//         this.groups =[]
//         this.profiles = []
//         this.accounts = [
//           {
//               name : 'Manage Users',
//               icon : 'construct',
//               //link : ServicesPage
//            },
//            {
//               name : 'Manage Customers',
//               icon : 'folder-open',
//              // link : ServicesPage
//            },
//         ]
//          break; 
//       } 
//       default: { 
//          //statements; 
//          break; 
//       } 
//    } 
//   }
  
}
