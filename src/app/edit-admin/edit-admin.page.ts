import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api'; 

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.page.html',
  styleUrls: ['./edit-admin.page.scss'],
  providers: [MessageService]
})
export class EditAdminPage implements OnInit {
  userform: FormGroup;

  submitted: boolean;

  description: string;
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'authPerson': new FormControl('', Validators.required),
      'wings': new FormControl('', Validators.required),
      'flats': new FormControl('', Validators.required),
      'projectname': new FormControl('', Validators.required),
      'account': new FormControl('', Validators.required),
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
