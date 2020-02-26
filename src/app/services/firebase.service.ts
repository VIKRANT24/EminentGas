import { Injectable } from '@angular/core';
import { AngularFirestore, } from '@angular/fire/firestore';
import {Headers,RequestOptions,Http,URLSearchParams} from '@angular/http'
import 'rxjs/add/operator/map'
import firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private data : any;
  private baseURL:any;
  constructor(public db: AngularFirestore,public http: Http) {
    this.baseURL = "https://eminent-gas-tech.firebaseio.com/"

  }

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey){
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }
  

  updateUser(client,address,arm,person,wings,flats,project,email,mobile,id,userActivation){
   // value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('Admin/').doc(id).set({
    //  account_details:account,
      address:address,
      authorized_person:person,
      client_name:client,
      email_id:email,mobile,
      no_of_arms:arm,
      no_of_flats:flats,
      no_of_wings:wings,
      project_name:project,
      pwd:'Abc@123',
      flag:userActivation
  }
    );
  }

  deleteUser(userKey){
    return this.db.collection('Admin').doc(userKey).delete();
  }

deleteARM(ARMKey,id)
  {
    let documentRef =  this.db.collection('Admin').doc(id);

   return documentRef.update({
      "no_of_arms": firebase.firestore.FieldValue.arrayRemove(ARMKey)
  });

  }
  adminDeleteARM(ARMKey)
  {
    var user_data = JSON.parse(localStorage.getItem('selected_user'))
   let documentRef =  this.db.collection('Admin').doc(user_data[0].id);
   return documentRef.update({
      "no_of_arms": firebase.firestore.FieldValue.arrayRemove(ARMKey)
  });

}

  AddARM(arm)
  {
    var user_data = JSON.parse(localStorage.getItem('selected_user'))
    //var arm = ["70b3d5f830001b46-101,12345,00,12", "70b3d5f830001b53-202,23456,12,23"]
    return this.db.collection('Admin/').doc(user_data[0].id).set({
      address: user_data[0].address,
      authorized_person: user_data[0].authorized_person,
      client_name: user_data[0].client_name,
      email_id: user_data[0].email_id,
      mobile: user_data[0].mobile,
      no_of_arms: arm,
      no_of_wings: user_data[0].no_of_wings,
      project_name: user_data[0].project_name,
      flag: "1",
      pwd:'Abc@123',
    }
      );

  }

  getUsers(){
    return this.db.collection('Admin').snapshotChanges();
  }

  getDevices(){
    return this.db.collection('Devices').snapshotChanges();
  }

  getARM(){
    var flag = "0"
    return this.db.collection('Devices',ref => ref.where('flag', '==', flag)).snapshotChanges();
  }


  searchUsers(email,pwd){
    return this.db.collection('Admin',ref => ref.where('email_id', '==', email).where('pwd', '==', pwd)).snapshotChanges()
  }

  getDataPackets(device){
    return this.db.collection('DataPackets',ref => ref.where('device', '==', device)).snapshotChanges()
  
  }

  searchUsersByEmail(email){
    return this.db.collection('Admin',ref => ref.where('email_id', '==', email)).snapshotChanges()
  }


  createUser(client,address,arm,person,wings,flats,project,email,mobile,userActivation){
    return this.db.collection('Admin/').add({
      // account_details:account,
        address:address,
        authorized_person:person,
        client_name:client,
        email_id:email,mobile,
        no_of_arms:arm,
        no_of_flats:flats,
        no_of_wings:wings,
        project_name:project,
        pwd:'Abc@123',
        flag:userActivation
    });
  }

  getMethod(page,params)
  {
    if(this.data)
    {
return Promise.resolve(this.data);
    }
    return new Promise((resolve,reject)=>{
      let options = new RequestOptions();
      options.headers = new Headers();
      options.headers.append('Accept','application/json');
      options.headers.append('Contest-type','application/json');

      this.http.get(this.baseURL+page,params)
       .subscribe(data=>{
          var myobj = data['_body'];
          resolve(myobj);
         
       },
       err => {
            var error = err['_body'];
            resolve(error);
       });
      });
            
  }
}