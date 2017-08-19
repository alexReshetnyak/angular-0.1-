import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
//import { DemoService } from '../shared/services/demo.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'my-users',
  templateUrl: './app/users/users.component.html'
})
export class UsersComponent implements OnInit {
  showCreateMessage: boolean = false;
  showDeleteMessage: boolean = false;

  constructor(private service: UserService, 
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() { 

  this.activatedRoute.paramMap.forEach((params: Params) => {
      let action = params.get("action"); 
      if (action == "created") {
        this.showCreateMessage = true;
        this.clearMessages();
      }
      if (action == "deleted") {
        this.showDeleteMessage = true;
        this.clearMessages();
      }
    });
  }

  clearMessages() {
    setTimeout(() => {
      this.showCreateMessage = false;
      this.showDeleteMessage   = false;
    }, 5000);
  }

}