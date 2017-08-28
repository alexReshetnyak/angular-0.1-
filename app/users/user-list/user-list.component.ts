import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from '../../shared/services/user.service';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  styles: [`
    .user-card { cursor: pointer; }
    h2 { margin-bottom: 10px; } 
    .jumbotron {padding: 30px;}
  `],
  templateUrl: './app/users/user-list/user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() { 
    this.activatedRoute.data.subscribe((data: {users:User[] }) => {
      this.users = data.users;
    });
    
  }

}