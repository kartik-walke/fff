import { UserProviderService } from './../../CustomService/user-provider.service';
import { User } from './../../Models/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserProviderService,
    private router:Router) { }

  ngOnInit(): void {
    console.log(this.userService.getUsers());
  }

  addUser(email:String, password:String, city:String, state:String) {
    var newUser = new User(email, password, city, state);
    this.userService.addUser(newUser);
    alert("User Added Successfully...");
    this.router.navigate(['userList']);
    console.log(this.userService.getUsers());
  }

}
