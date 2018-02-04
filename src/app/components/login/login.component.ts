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
    this.users.push(this.user);
    this.user = {};
  }

}
