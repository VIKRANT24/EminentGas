import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
 @Input('product') product:any;
  constructor(private toastCtrl:ToastController) { }

  ngOnInit() {}

  async buyItem(product){
    let toast = await this.toastCtrl.create({
      message: 'Added to the cart: $(product.name)'
    });
    toast.present();
  }
}
