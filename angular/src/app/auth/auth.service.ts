import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {User} from "./signup/user.model";

@Injectable()
export class AuthService {

  constructor(private http : Http) { }

  signupUser (user: User) {
    this.http.post('http://localhost:3000/users', user)
      .subscribe(
        (response: Response) => {
          console.log(response);
          console.log(response.json());
          console.log(typeof response.json());
        });
  }

  signinUser(email : string, password : string) {

  }

  logoutUser() {

  }

}
