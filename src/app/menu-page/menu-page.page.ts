import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.page.html',
  styleUrls: ['./menu-page.page.scss'],
})
export class MenuPagePage implements OnInit {
  types: any[];
  selectedType: string;
  
  constructor(public navCtrl:NavController) {
    this.types = [
      {label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal'},
      {label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa'},
      {label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard'}
  ];
   }

  ngOnInit() {
  }
  openAdminLogin(){
this.navCtrl.navigateForward('/super-admin')
  }

  openClientLogin(){
    this.navCtrl.navigateForward('/login')
      }
}
