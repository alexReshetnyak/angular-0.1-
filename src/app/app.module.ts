import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AlertModule } from 'ngx-bootstrap';
import { CollapseDirective } from 'ngx-bootstrap'

import { AppComponent } from './app.component';
import { EnterComponent } from './enter/enter.component';
import { PlasticcardComponent } from './plasticcard/plasticcard.component';

import { routes } from "./app.routes";
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    CollapseDirective,
    PlasticcardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
