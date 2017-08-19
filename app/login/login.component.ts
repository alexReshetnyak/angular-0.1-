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
  userRole: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    let isLogin = this.authService.isLoggedIn();
    if(isLogin) {
      this.router.navigate(['/users']); 
    }
  }  

  login() {
    this.errorMessage = '';
    this.userRole = this.authService.login(this.credentials.username, this.credentials.password);
    if (this.userRole === 'admin' || this.userRole === 'user') {
      this.router.navigate(['/users']);
    }
  }

}