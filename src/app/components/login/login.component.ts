import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireDatabase]
})
export class LoginComponent implements OnInit {
  objectKeys = Object.keys;
  user = {};
  users: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.users = this.db.list('/users');
  }

  onSubmit() {
    //firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      //var errorCode = error.code;
      //var errorMessage = error.message;
      //console.log('error', error);
      // ...
    //});
    this.users.push(this.user);
    this.user = {};
  }

}
