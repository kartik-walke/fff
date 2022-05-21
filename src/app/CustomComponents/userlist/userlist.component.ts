import { User } from './../../Models/User';
import { UserProviderService } from './../../CustomService/user-provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users : Array<User> | undefined;

  constructor(private userService: UserProviderService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
