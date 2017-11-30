import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {User} from "./signup/user.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  token : string;

  constructor(private http : HttpClient,
              private router : Router) { }

  signupUser (user: User) {
    this.http.post('http://localhost:3000/users', user,  {observe: 'response'})
      .subscribe(
        (response) => {

          console.log(response);
          console.log(typeof response);
          this.router.navigate(['todo']);
          // console.log(response['email']);
          // console.log(typeof response['_body']);
          // console.log(JSON.parse(response['_body']));
          // console.log(typeof JSON.parse(response['_body']));
          // console.log(response.json());
          // console.log(typeof response.json());
        });

  }

  getToken() {
    return this.token;
  }

  signinUser (email :string, password :string) {
    this.http.post('http://localhost:3000/users/login', {email: email, password : password})
      .subscribe(
        (response) => {
          console.log(response['tokens']);
          console.log(response['tokens'][1].token);
          this.token = response['tokens'][1].token;
          console.log(typeof response);
          this.router.navigate(['todo']);
        });
  }

  logoutUser() {

  }

}
