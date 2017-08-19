import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './shared/services/user.service';
import { UserListResolve } from './shared/guards/user-list-resolver.service';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { AdminGuard } from './shared/guards/admin-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserSingleComponent } from './users/user-single/user-single.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserRoutingModule } from './users/users-routing.module';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './shared/services/auth.service';
import { DemoService } from './shared/services/demo.service';
import { DemoEmptyService } from './shared/services/demo.empty.service';
import { demoObject } from './shared/models/demo';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/throw';


@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    UserRoutingModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserSingleComponent,
    UserEditComponent,
    UserCreateComponent,
    LoginComponent,
    AboutComponent,
    NotFoundComponent
  ],
  providers: [
    UserService,
    AuthService,
    UserListResolve,
    AuthGuard,
    AdminGuard,
    CanDeactivateGuard,
    { provide: DemoService, useClass: DemoService}
        
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
