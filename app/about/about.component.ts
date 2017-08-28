import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './app/about/about.component.html'
})
export class AboutComponent implements OnInit {
  isAboutVisible: boolean = true;

  constructor() { }

  ngOnInit() {
    
  }  

}