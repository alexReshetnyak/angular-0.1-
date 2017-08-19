import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service";

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {


  constructor(
    private authService: AuthService, 
    private router: Router) { }

  canActivate() {

    let isAdmin = this.authService.userRole;
    console.log(this.authService.userRole);
    if(isAdmin === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  canActivateChild() {
    return this.canActivate();
  }

}
