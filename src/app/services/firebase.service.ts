import { Injectable } from '@angular/core';
import { AngularFirestore, } from '@angular/fire/firestore';
import {Headers,RequestOptions,Http,URLSearchParams} from '@angular/http'
import 'rxjs/add/operator/map'
import firebase from 'firebase';

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

    documentRef.update({
      "no_of_arms": firebase.firestore.FieldValue.arrayRemove({"eventid":ARMKey})
  });

  }

  getUsers(){
    return this.db.collection('Admin').snapshotChanges();
  }

  getDevices(){
    return this.db.collection('Devices').snapshotChanges();
  }

  searchUsers(email,pwd){
    return this.db.collection('Admin',ref => ref.where('email_id', '==', email).where('pwd', '==', pwd)).snapshotChanges()
  }

  clientLoginResponse(email,pwd){
    return this.db.collection('Admin',ref => ref.where('email_id', '==', email).where('pwd', '==', pwd).where('flag','==','1')).snapshotChanges()
  
  }
  getDataPackets(device){
    return this.db.collection('DataPackets',ref => ref.where('device', '==', device)).snapshotChanges()
  
  }

  searchUsersByAge(value){
    return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
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