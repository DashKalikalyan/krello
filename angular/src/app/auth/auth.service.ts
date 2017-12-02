import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {User} from "./signup/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  token : string;
  userId : string;
  user : User = {
    firstName : '',
    lastName : '',
    email : '',
    phoneNumber : 0,
    password : ''
  };

  constructor(private http : HttpClient,
              private router : Router) { }

  signupUser (user: User) {
    this.http.post('http://localhost:3000/users', user)
      .subscribe(
        (response : any) => {

          console.log(response);
          console.log(typeof response);
          this.saveUser(response);
          this.userId = response['_id'];
          this.token = response['tokens'][0].token;
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
        (response : any) => {
          console.log(response['tokens']);
          this.saveUser(response);
          this.userId = response['_id'];
          console.log(response['tokens'][0].token);
          this.token = response['tokens'][0].token;
          console.log(typeof response);
          this.router.navigate(['todo']);
        });
  }

  logoutUser() {
    console.log('hello');
    const header = new HttpHeaders().set('x-auth', this.token);
    this.http.delete('http://localhost:3000/users/me/token',{headers: header})
      .subscribe(
        (response : string) => {
          console.log(response);
          console.log(this.token);
          this.router.navigate(['/signin']);
          this.token=null;
          console.log(this.token);
        });
  }

  getUser() {
    return this.user;
  }

  updateUser(user : User) {
    this.http.put('http://localhost:3000/users/'+this.userId, user)
      .subscribe(
        (response : any) => {
          console.log(response['tokens']);
          this.saveUser(response);
          console.log(typeof response);
          this.router.navigate(['profile']);
        });
  }

  saveUser(response) {
    this.user.firstName = response['firstName'];
    this.user.lastName = response['lastName'];
    this.user.phoneNumber = response['phoneNumber'];
    this.user.email = response['email'];
  }

}
