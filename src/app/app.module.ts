import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AlertModule } from 'ngx-bootstrap';
import { CollapseDirective } from 'ngx-bootstrap'

import { AppComponent } from './app.component';
import { EnterComponent } from './enter/enter.component';
import { PlasticcardComponent } from './plasticcard/plasticcard.component';

import { routes } from "./app.routes";


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
    HttpModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
