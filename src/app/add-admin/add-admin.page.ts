import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api'; 

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.page.html',
  styleUrls: ['./add-admin.page.scss'],
  providers: [MessageService],
})
export class AddAdminPage implements OnInit {
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

  description: string;
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'clientName': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'arms': new FormControl('', Validators.required),
      'projectname': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6),Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
      'mobile': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10),Validators.pattern(/^((\+)?(\d{2}[-]))?(\d{10}){1}?$/)])),
      // 'gender': new FormControl('', Validators.required)
  });

 
}

onSubmit(value: string) {
  this.submitted = true;
  this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
}

presentToast(){

}
}
