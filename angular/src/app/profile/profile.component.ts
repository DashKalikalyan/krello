import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {User} from "../auth/signup/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user : User;
  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

}
