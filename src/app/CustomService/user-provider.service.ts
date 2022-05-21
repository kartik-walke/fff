import { User } from './../Models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {

  users : Array<User>|undefined;

  constructor(private http:HttpClient) { }

  getUsers() : Array<User> {
    if(localStorage.getItem('users') == undefined) this.users = [];
    else this.users = JSON.parse(localStorage.getItem('users') as string);
    return this.users as Array<User>;
  }

  addUser(u:User) {
    this.users = this.getUsers();
    this.users.push(u);
    localStorage.setItem('users', JSON.stringify(this.users));
    console.log(this.getUsers());
  }

  validateUser(email:String, password: String) : boolean {
    var error = true;
    this.users = this.getUsers();
    this.users.forEach(user=>{
      if(user.email === email && user.password === password) error = false;
    });
    return error;
  }
}
