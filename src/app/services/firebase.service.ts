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

  updateUser(client,address,arm,person,wings,flats,project,account,email,mobile,id){
   // value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('Admin').doc(id).set({
      account_details:account,
      address:address,
      authorized_person:person,
      client_name:client,
      email_id:email,mobile,
      no_of_arms:arm,
      no_of_flats:flats,
      no_of_wings:wings,
      project_name:project
  }
    );
  }

  deleteUser(userKey){
    return this.db.collection('Admin').doc(userKey).delete();
  }

  getUsers(){
    return this.db.collection('Admin').snapshotChanges();
  }

  searchUsers(searchValue){
    return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value){
    return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(client,address,arm,person,wings,flats,project,account,email,mobile){
    return this.db.collection('Admin').add({
        account_details:account,
        address:address,
        authorized_person:person,
        client_name:client,
        email_id:email,mobile,
        no_of_arms:arm,
        no_of_flats:flats,
        no_of_wings:wings,
        project_name:project
    });
  }
}