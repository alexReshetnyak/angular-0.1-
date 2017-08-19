import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../shared/models/user';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from '../../shared/services/user.service';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  styles: [`
    .film--wrap{
      margin-bottom: 20px;
    }
    .user-card { cursor: pointer;
                  width: 100%;
                  height: 700px;
                  overflow: hidden;}
    img{ width: 250px;}
    h2 { margin-bottom: 20px;} 
    h2>div{ font-size: 12px; line-height: 16px;}
    .jumbotron {padding: 30px;}
    
  `],
  templateUrl: './app/users/user-list/user-list.component.html'
})
export class UserListComponent implements OnInit {
  private films;
  private filmsObservable;
  private userRole: string;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private authService: AuthService,
            ) { }

  ngOnInit() { 
    this.filmsObservable =  this.userService.getFilms().subscribe(films =>{
      this.films = films;
      this.userRole = this.authService.userRole;
      console.log(films);
    });
  }

  ngOnDestroy() {
    this.filmsObservable.unsubscribe();
  }
}