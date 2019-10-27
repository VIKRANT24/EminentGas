import { Component, OnInit,Input } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.page.html',
  styleUrls: ['./add-admin.page.scss'],

})

export class AddAdminPage implements OnInit {
  client:any=""
  address:any=""
  arm:any=""
  person:any=""
  wings:any=""
  flats:any=""
  project:any=""
  account:any=""
  email:any=""
  mobile:any=""
  id:any=""
  page:any=""
  create_show:boolean=false
  update_show:boolean=false
  @Input() data: any;

 


  submitted: boolean;

  description: string;
  constructor(public firebaseService: FirebaseService,public modalCtrl:ModalController) { }

  ngOnInit() {
    
 if(this.data==undefined)
 {
  this.page = "Add Admin"
  this.create_show=true
  this.update_show = false
 }
 else  
 {
  this.create_show=false
  this.update_show = true
  this.page = "Update Admin"
console.log(this.data)
  this.client=this.data[0].client_name
  this.address=this.data[0].address
  this.arm=this.data[0].no_of_arms
  this.person=this.data[0].authorized_person
  this.wings=this.data[0].no_of_wings
  this.flats=this.data[0].no_of_flats
  this.project=this.data[0].project_name
  this.account=this.data[0].account_details
  this.email=this.data[0].email_id
  this.mobile=this.data[0].mobile
  this.id=this.data[0].id


 }
 
}

create()
{
  this.firebaseService.createUser(this.client,this.address,this.arm,this.person,this.wings,this.flats,this.project,this.account,this.email,this.mobile)
	.then(
	  res => {
var data =  res
console.log(data)
this.modalCtrl.dismiss();
	  }
	)
}

update()
{
  this.firebaseService.updateUser(this.client,this.address,this.arm,this.person,this.wings,this.flats,this.project,this.account,this.email,this.mobile,this.id)
  .then(
    res => {
     // this.router.navigate(['/home']);
     this.modalCtrl.dismiss();
    }
  )
}


}
