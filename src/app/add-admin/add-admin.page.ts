import { Component, OnInit,Input } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ModalController,AlertController,ToastController } from '@ionic/angular';
import { Events } from '@ionic/angular';
import { FirebaseDatabase } from '@angular/fire';
import data from '../../assets/device.json'
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.page.html',
  styleUrls: ['./add-admin.page.scss'],

})

export class AddAdminPage implements OnInit {
  client:any=""
  address:any=""
  arm:any=[]
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
  arms:any=[];
 loaderToShow: any;
 selected_arms:any=[];
 selected_arms_details:any=[];
 arm_flats:any=[];
 flatNo:any="";
 meterNo:any="";
 meterDefValue:any="";
 amrDefValue:any="";
 amrWithValues:any=[]


  submitted: boolean;

  description: string;
  constructor(public loadingController: LoadingController,public firebaseService: FirebaseService,public modalCtrl:ModalController,public events:Events,public http: HttpClient,public alertController:AlertController,public toastController: ToastController) { 
    this.arms = data;
    console.log(this.arm)
  }

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
  //this.arm=this.data[0].no_of_arms
  this.person=this.data[0].authorized_person
  this.wings=this.data[0].no_of_wings
  this.flats=this.data[0].no_of_flats
  this.project=this.data[0].project_name
  //this.account=this.data[0].account_details
  this.email=this.data[0].email_id
  this.mobile=this.data[0].mobile
  this.id=this.data[0].id

  for(var i = 0;i<this.data[0].no_of_arms.length;i++)
  {
    var deveui = this.data[0].no_of_arms[i].split('-')[0]
    var flats = this.data[0].no_of_arms[i].split('-')[1]
    var flatNo=flats.split(',')[0]
    var meterNo=flats.split(',')[1]
    var meterDefValue=flats.split(',')[2]
    var amrDefValue=flats.split(',')[3]
    this.selected_arms.push({'deveui':deveui,'flatNo':flatNo,'meterNo':meterNo,'meterDefValue':meterDefValue,'amrDefValue':amrDefValue})
    this.arm_flats.push(deveui+"-"+flats)
    this.arm.push(deveui)
  }

 }
 
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

create()
{
  
  this.showLoader()
  this.firebaseService.createUser(this.client,this.address,this.selected_arms_details,this.person,this.wings,this.flats,this.project,this.email,this.mobile)
  //this.firebaseService.createUser(this.client,this.address,this.arm,this.person,this.wings,this.flats,this.project,this.email,this.mobile)
	.then(
	  res => {
var data =  res
console.log(data)
localStorage.setItem('superAdminLogin','')
this.events.publish('update_list');
this.modalCtrl.dismiss();

	  }
  )
 // this.send_email(this.email)
  this.hideLoader()
  this.success_msg()


}

selectARM(event)
{
  this.selected_arms =[]
  for(var i=0;i<this.arm.length;i++)
  {
    var position = data.findIndex(c=>c.deveui == this.arm[i])
    if(this.selected_arms.findIndex(a=>a.deveui==this.arm[i]) < 0 )
    this.selected_arms.push(data[position])
  
  }
  for(var i=0;i<this.selected_arms.length;i++){
    var deviceId=this.selected_arms[i].deveui
    for(var j=0;j<this.selected_arms_details.length;j++){
      if(!this.selected_arms_details[j].includes(deviceId)){
        this.selected_arms_details.pop(this.selected_arms_details[j])
      }
    }
  }
}

// assign_flats(item,event)
// {
// if(!this.arm_flats.includes(item+"-"+event))
// this.arm_flats.push(item+"-"+event)
// }

update()
{
  this.showLoader()
  this.firebaseService.updateUser(this.client,this.address,this.arm,this.person,this.wings,this.flats,this.project,this.email,this.mobile,this.id)
  .then(
    res => {
      this.events.publish('update_list');
     // this.router.navigate(['/home']);
     this.modalCtrl.dismiss();
    this.hideLoader()
     this.update_msg()
    }
  )
}

send_email(email)
{
  var headers = new Headers();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json' );
  //const requestOptions = new RequestOptions({ headers: headers });

  let postData = {"lib_version":"2.3.2",
  "user_id":"user_XzQoUSMjq7kwY5ATSk6Ns",
  "service_id":"vinitarane0731_gmail_com",
  "template_id":"template_Gl1QX8GU",
  "template_params":{"reply_to":this.email,"from_name":"Eminent Gas Tech","to_name": this.client, "message_html":'<p>Your account information is as follows:</p> <p>----------------------------------------------------</p> <p>Username : '+this.email+'</p> <p>Password : Abc@123</p> <p>----------------------------------------------------</p>',}}

  this.http.post("https://api.emailjs.com/api/v1.0/email/send", postData)
    .subscribe(data => {
    
     }, error => {
      console.log(error);
    });
}

async success_msg()
{
  
  const alert = await this.alertController.create({
    header: 'Eminent Gas Tech',
    message: 'Admin has been created successfully and credentials has been sent through email.',
    buttons: ['OK']
  });

  await alert.present();
}

async update_msg()
{
  const alert = await this.alertController.create({
    header: 'Eminent Gas Tech',
    message: 'Admin has been updated successfully.',
    buttons: ['OK']
  });

  await alert.present();
}

async addValue(item,deviceui){
  var count=0
  var deviceUi=deviceui.deveui
  var valueData=document.getElementById(item)
  var abc = valueData.children[0].children
  var xyz = abc[0].children
  var flatNo=xyz['flatNo'].value
  var meterNo=xyz['meterNo'].value
  var meterDefValue=xyz['meterDefValue'].value
  var amrDefValue=xyz['amrDefValue'].value
  if(flatNo==""||meterNo==""||meterDefValue==""||amrDefValue==""){
    
      const toast = await this.toastController.create({
        message: 'Please enter all fields',
        duration: 2000,
        color:'medium',
        position: 'top'
      });
     toast.present();
     
  }
  else{
  var dataObj=deviceUi+"-"+flatNo+","+meterNo+","+meterDefValue+","+amrDefValue
  for(var i=0;i<this.selected_arms_details.length;i++){
    if(this.selected_arms_details[i].includes(deviceUi)){
      count=1
      break
    }
    
  }
  if(count==0){
    const toast = await this.toastController.create({
      message: 'Added successfully',
      duration: 2000,
      color:'medium',
      position: 'top'
    });
   toast.present();
  this.selected_arms_details.push(dataObj)
  }
  else{
    const toast = await this.toastController.create({
      message: 'Already added',
      duration: 2000,
      color:'medium',
      position: 'top'
    });
   toast.present();
  }
}
}
  
}



