import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Injectable()
export class UserListResolve implements Resolve<User[]> {

  constructor(private userService: UserService, private router: Router) {}

  resolve() {
    return this.userService.getUsers();
  }

}