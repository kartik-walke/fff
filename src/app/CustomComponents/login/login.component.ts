import { Router } from '@angular/router';
import { UserProviderService } from './../../CustomService/user-provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError : boolean | undefined;

  constructor(private userService:UserProviderService,
    private router:Router) { }

  ngOnInit(): void {
  }

  validateUser(email:String, password:String) {
    this.loginError = this.userService.validateUser(email, password);
    console.log(this.loginError);
    if(this.loginError == false) {
      alert("User Login Successful...");
      this.router.navigate(['userList']);
    }
  }

}
