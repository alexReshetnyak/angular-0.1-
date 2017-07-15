import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { LoginForm } from '../models/form.interface';

@Component({
  moduleId: module.id,
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {

  @ViewChild('loginForm') 
  loginForm: NgForm;
  form: LoginForm;

  constructor() { }

  ngOnInit() {
    this.form = this.createEmptyForm();
  }

  createEmptyForm(): LoginForm {
    return {email: "", password: ""};
  }
  
  createTask() {
    console.log(this.loginForm);
  }

}
