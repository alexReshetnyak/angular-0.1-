import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './app/login/login.component.html'
})
export class LoginComponent implements OnInit {
  credentials = { username: '', password: '' };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    let isLogin = this.authService.isLoggedIn();
    if(isLogin) {
      this.router.navigate(['/users']); 
    }
  }  

  login() {
    this.errorMessage = '';

    this.authService.login(this.credentials.username, this.credentials.password)
      .subscribe(
        data => {
          this.router.navigate(['/users']);
          console.log(data); 
        },
        err => {
          this.errorMessage = err;
          console.error(err);
        }
      );
  }

}