import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserService } from '.././shared/services/user.service';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-single/user-single.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { AuthService } from '.././shared/services/auth.service';
import { UserListResolve } from '.././shared/guards/user-list-resolver.service';
import { AuthGuard } from '.././shared/guards/auth-guard.service';
import { AdminGuard } from '.././shared/guards/admin-guard.service';
import { CanDeactivateGuard } from "../shared/guards/can-deactivate-guard.service";


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'create',
        component: UserCreateComponent,
        canActivate: [AdminGuard],
      },
      {
        path: ':id',
        component: UserSingleComponent
      },
      {
        path: ':id/edit',
        component: UserEditComponent,
        canActivate: [AdminGuard],
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule {}

