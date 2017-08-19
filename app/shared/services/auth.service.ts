import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private authUrl: string = 'https://reqres.in/api';
  private loggedIn: boolean = false;
  private adminLogin: string = "admin";
  private adminPassword: string = "password";
  private userLogin: string = 'user';
  private userPassword: string = 'userpassword';
  public userRole: string = "";
  
  constructor(private http: Http) {
    // при обновлении страницы смотрим в localStorage чтоб проверить есть ли токен
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  isLoggedIn() {
    this.userRole = localStorage.getItem('auth_token');
    return this.loggedIn;
  }

  login(username: string, password: string){

    if(username === this.adminLogin && password === this.adminPassword){
      this.userRole = 'admin';
      localStorage.setItem('auth_token', this.userRole);
      this.loggedIn = true;

    }else if(username === this.userLogin && password === this.userPassword){
      this.userRole = 'user';
      localStorage.setItem('auth_token', this.userRole);
      this.loggedIn = true;

    }
    return this.userRole;
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body   = err.json() || '';
      let error  = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }

}
