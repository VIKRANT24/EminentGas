import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public devices: Array<{ name : string, icon : string}>    = [];
   public groups: Array<{ name : string, icon : string}>    = [];
   public profiles: Array<{ name : string, icon : string}>    = [];
   public find: Array<{ name : string, icon : string}>    = [];
   public accounts: Array<{ name : string, icon : string}>    = [];
  flag:boolean = true
   // public appPages = [
  //   {
  //     title: 'Devices',
  //     url: '/devices',
  //     icon: 'home'
  //   },
  //   {
  //     title: 'Groups',
  //     url: '/groups',
  //     icon: 'list'
  //   },
  //   {
  //     title: 'Application',
  //     url: '/application',
  //     icon: 'list'
  //   },
  //   {
  //     title: 'Profiles',
  //     url: '/profiles',
  //     icon: 'list'
  //   },
  //   {
  //     title: 'Find',
  //     url: '/find',
  //     icon: 'list'
  //   },
  //   {
  //     title: 'Accounts',
  //     url: '/accounts',
  //     icon: 'list'
  //   }
  // ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();


   
    
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
  subList(value){
    switch(value) { 
      case "device": { 
this.flag = false
        this.accounts = []
        this.find = []
        this.groups =[]
        this.profiles = []

        this.devices = [
          {
              name : 'Manage Devices',
              icon : 'construct',
              //link : ServicesPage
           },
           {
              name : 'Device Activity',
              icon : 'folder-open',
             // link : ServicesPage
           },
           {
              name : 'Network Map',
              icon : 'logo-apple',
             // link : ServicesPage
           },
           {
              name : 'Batch Registration',
              icon : 'logo-android',
              //link : ServicesPage
           },
        ]
         break; 
      } 
      case "group": { 
        this.accounts = []
        this.find = []
        this.devices =[]
        this.profiles = []
        this.groups = [
          {
              name : 'Manage Groups',
              icon : 'construct',
              //link : ServicesPage
           },
           {
              name : 'Group Activity',
              icon : 'folder-open',
             // link : ServicesPage
           },
        ]
         break; 
      } 
      case "profile": { 
        this.accounts = []
        this.find = []
        this.groups =[]
        this.devices = []
        this.profiles = [
          {
              name : ' Device Profiles',
              icon : 'construct',
              //link : ServicesPage
           },
           {
              name : 'Service Profiles',
              icon : 'folder-open',
             // link : ServicesPage
           },
        ]
      
         break; 
      }
      case "find": { 
        this.accounts = []
        this.devices = []
        this.groups =[]
        this.profiles = []
        this.find = [
          {
              name : 'Find Devices',
              icon : 'construct',
              //link : ServicesPage
           },
           {
              name : 'Find Users',
              icon : 'folder-open',
             // link : ServicesPage
           },
        ]
         break; 
      } 
      case "account": { 
        this.devices = []
        this.find = []
        this.groups =[]
        this.profiles = []
        this.accounts = [
          {
              name : 'Manage Users',
              icon : 'construct',
              //link : ServicesPage
           },
           {
              name : 'Manage Customers',
              icon : 'folder-open',
             // link : ServicesPage
           },
        ]
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 
  }
  
}
