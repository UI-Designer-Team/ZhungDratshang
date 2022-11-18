import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  countries = ['Bhutan','India','Nepal','Bangladesh'];
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  registrationForm = new FormGroup({
  first_name: new FormControl("",
  [Validators.required]),
  last_name: new FormControl("",
  [Validators.required]),
  display_name: new FormControl("",
  [Validators.required]),
  email: new FormControl('',
  [Validators.required,Validators.pattern(this.emailPattern)]),
  password: new FormControl('',
  [Validators.required, Validators.minLength(5)]),
  password_confirmation: new FormControl('',
  [Validators.required, Validators.minLength(5)]),
  });

  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.registrationForm);
  }


}
