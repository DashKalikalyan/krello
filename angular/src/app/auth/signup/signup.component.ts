import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    firstName:'',
    lastName:'',
    phoneNumber:'',
    email:'',
    password:''
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.user.firstName = form.value.firstName;
    this.user.lastName = form.value.lastName;
    this.user.phoneNumber = form.value.phoneNumber;
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    console.log(this.user);
  }
}
