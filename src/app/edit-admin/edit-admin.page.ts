import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api'; 
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.page.html',
  styleUrls: ['./edit-admin.page.scss'],
  providers: [MessageService]
})
export class EditAdminPage implements OnInit {
text1:any=""
text2:any=""
text3:any=""
text4:any=""
text5:any=""
text6:any=""
text7:any=""
text8:any=""
 
  userform: FormGroup;

  submitted: boolean;
  clientName=""
  authPerson=""
  wings=""
  flats=""
  projName=""
  accDetails=""
  email=""
  mobNo=""
  description: string;
  constructor(private fb: FormBuilder, private messageService: MessageService, public toastController: ToastController) { }

  ngOnInit() {


 
}

async saveClick(){
  if(this.clientName == "")
    {
       const toast = await this.toastController.create({
       message: 'Please enter client name',
       duration: 2000,
       color:'medium',
       position: 'top'
     });
    toast.present();
    }
    else if(this.authPerson == "")
    {
     const toast = await this.toastController.create({
       message: 'Please enter Person name',
       duration: 2000,
       color:'medium',
       position: 'top'
     });
    toast.present();
    }
    else if(this.wings == "")
    {
     const toast = await this.toastController.create({
       message: 'Please enter no Of Wings',
       duration: 2000,
       color:'medium',
       position: 'top'
     });
    toast.present();
    }
    else if(this.flats == "")
    {
     const toast = await this.toastController.create({
       message: 'Please enter no Of Flats',
       duration: 2000,
       color:'medium',
       position: 'top'
     });
    toast.present();
    }
    else if(this.projName == "")
    {
     const toast = await this.toastController.create({
       message: 'Please enter Project Name',
       duration: 2000,
       color:'medium',
       position: 'top'
     });
    toast.present();
    }
    else if(this.accDetails == "")
    {
     const toast = await this.toastController.create({
       message: 'Please enter Account Details',
       duration: 2000,
       color:'medium',
       position: 'top'
     });
    toast.present();
    }
    else if(this.email == "")
    {
     const toast = await this.toastController.create({
       message: 'Please enter Email',
       duration: 2000,
       color:'medium',
       position: 'top'
     });
    toast.present();
    }
    else if(this.mobNo == "")
    {
     const toast = await this.toastController.create({
       message: 'Please enter Mobile no',
       duration: 2000,
       color:'medium',
       position: 'top'
     });
    toast.present();
    }
}
}
