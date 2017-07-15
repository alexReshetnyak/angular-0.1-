import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { CardForm } from '../models/form.interface';

@Component({
  moduleId: module.id,
  selector: 'app-plasticcard',
  templateUrl: './plasticcard.component.html',
  styleUrls: ['./plasticcard.component.css']
})
export class PlasticcardComponent implements OnInit {

  @ViewChild('cardForm') 
  cardForm: NgForm;

  form: CardForm;
  formSubmit: boolean = false;

  constructor() { }

  ngOnInit() {
    this.form = this.createEmptyForm();
  }

  createEmptyForm(): CardForm {
    return {phone: "",
            money: 50, 
            email: "", 
            cardNumber: "",
            cardDateMonth: "_ _", 
            cardDateYear: "_ _ _ _", 
            cardCVV: ""};
  }
  
  createTask() {
    this.formSubmit = true;
    console.log(this.cardForm);
  }
}
