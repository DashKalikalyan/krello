import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from "../auth.service";
import {User} from "./user.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : User;
  constructor(private authService : AuthService) { }

  ngOnInit() {
    console.log(this.user);
    console.log(typeof this.user);
  }

  onSubmit(form: NgForm) {
    console.log(this.user);
    console.log('hi');
    console.log(typeof form);
    // console.log(typeof this.user);
    // this.user['firstName'] = form.value.firstName;
    // this.user['lastName'] = form.value.lastName;
    // this.user['phoneNumber'] = form.value.phoneNumber;
    // this.user['email'] = form.value.email;
    // this.user['password'] = form.value.password;
    // console.log(this.user);
    //
    // this.authService.signupUser(this.user);


    // const firstName = form.value.firstName;
    // const lastName = form.value.lastName;
    // const phoneNumber = form.value.phoneNumber;
    // const email = form.value.email;
    // const password = form.value.password;
    const user = {
      firstName:form.value.firstName,
      lastName:form.value.lastName,
      phoneNumber : form.value.phoneNumber,
      email : form.value.email,
      password : form.value.password
    };

    this.authService.signupUser(user);

  }
}
