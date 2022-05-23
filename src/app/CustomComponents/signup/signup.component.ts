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

  addUser(firstName:String, lastName:String, dob:Date, age:number, mobile:number, vaccineName:String, vaccineNumber:String, dov:Date,email:String, password:String, aadharNumber:number) {
    var vacNo = 0;
    if(vaccineNumber == "one") vacNo = 1;
    else vacNo = 2;
    var newUser = new User(firstName, lastName, dob.toString(), age, mobile, vaccineName, vacNo, dov.toString(), email, password, aadharNumber);
    this.userService.addUser(newUser);
    alert("User Added Successfully...");
    this.router.navigate(['userList']);
    console.log(this.userService.getUsers());
  }

}
