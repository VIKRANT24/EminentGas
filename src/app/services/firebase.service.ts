import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey){
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }
  

  updateUser(client,address,arm,person,wings,flats,project,email,mobile,id){
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
      pwd:'Abc@123'
  }
    );
  }

  deleteUser(userKey){
    return this.db.collection('Admin').doc(userKey).delete();
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

  searchUsersByAge(value){
    return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(client,address,arm,person,wings,flats,project,email,mobile){
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
        pwd:'Abc@123'
    });
  }
}