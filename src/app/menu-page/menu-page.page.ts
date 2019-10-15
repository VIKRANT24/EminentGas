import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.page.html',
  styleUrls: ['./menu-page.page.scss'],
})
export class MenuPagePage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  addAdmin(){
this.navCtrl.navigateForward('/add-admin')
  }

  adminList(){
    this.navCtrl.navigateForward('/admin-list')
      }
}
