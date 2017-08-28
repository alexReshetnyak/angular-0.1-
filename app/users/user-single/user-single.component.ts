import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  templateUrl: './app/users/user-single/user-single.component.html'
})
export class UserSingleComponent implements OnInit {
  user: User;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private service: UserService
  ) {}

  ngOnInit() { 
    // статическое извлечение параметров, позходит не всегда
    //let id = +this.activatedRoute.snapshot.paramMap.get('id');
    //this.service.getUser(id)
    //  .subscribe(user => this.user = user);
    
    // динамическое извлечение параметров
    this.activatedRoute.paramMap.forEach((params: Params) => {
            let id = params.get("id");
            this.service.getUser(id)
            .subscribe(user => {
              if(user) {this.user = user;}
            });
    });
  }

  deleteUser() {
    this.service.deleteUser(this.user.id)
      .subscribe(data => {
        this.router.navigate(['/users', {action: "deleted"}]);
      });
  }

}