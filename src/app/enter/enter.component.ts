import { Component, OnInit, ViewChild, InjectionToken, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm  } from '@angular/forms';

import { LoginForm } from '../models/form.interface';
import { AuthService } from "../services/auth.service";

import {Router} from "@angular/router";

import { CONFIG } from './enter.validation';

let AppConfig = new InjectionToken('enter.validation');

@Component({
  moduleId: module.id,
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css'],
  providers: [{
    provide: AppConfig,
    useValue: CONFIG,
  }],
})
export class EnterComponent implements OnInit {

  loginForm: FormGroup;
  formValid: string = "INVALID";
  status: boolean = true;
  validation: object;
  validationMessages: object;
  formErrors = {
      "name": "",
      "password": ""
    }


  constructor(private fb : FormBuilder,
              private authService: AuthService,
              private router: Router,
              @Inject(AppConfig) config: any) {
                this.validation = config;
              }

  ngOnInit() {
    this.validationMessages = {
      "name": {
        "required": this.validation['required'],
        "minLength": this.validation['minLength'],
      },
      "password": {
        "required": this.validation['required'],
        "pattern": this.validation['pattern'],
      }
    }
    this.buildForm();
  }

  buildForm(){
    this.loginForm = this.fb.group({
      name: ['alex', [
        Validators.required,
        Validators.minLength(3),
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/), 
      ]],
    });
    this.loginForm.valueChanges.subscribe(data => this.onValueChanges(data));
    
  }

  onValueChanges(data){
    if (!this.loginForm) return;
    this.formValid = this.loginForm.status;
    for (let item in this.formErrors) {
      this.formErrors[item] = '';
      let control = this.loginForm.get(item);
      if (control && control.dirty && !control.valid) {
        let message = this.validationMessages[item];
        for (let key in control.errors) {
          this.formErrors[item] += message[key] + " ";
        }
      }
    }
  }
  
  createTask() {
    this.status = this.authService.checkUser(this.loginForm.value['name'], this.loginForm.value['password']);

    if (this.status) {
      this.router.navigate(['card']);
    }
  }
}
