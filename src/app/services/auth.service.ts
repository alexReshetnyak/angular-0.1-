import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  login: string = 'alex';
  password: string = 'Password1';

  constructor() { }

  checkUser(login, password){
    if (login === this.login && password === this.password) {
      return true;
    }else{
      return false;
    }
  }

}
