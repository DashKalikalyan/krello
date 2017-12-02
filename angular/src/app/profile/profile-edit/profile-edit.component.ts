import { Component, OnInit } from '@angular/core';
import {Profile} from "../profile.model";
import {ProfileService} from "../profile.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {User} from "../../auth/signup/user.model";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  user: User;
  constructor(private profileService : ProfileService,
              private router : Router,
              private authService : AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }
  onSubmit(form : NgForm) {
    this.user.firstName = form.value.firstName;
    this.user.lastName = form.value.lastName;
    this.user.phoneNumber= form.value.phoneNumber;
    this.user.email= form.value.email;

    this.authService.updateUser(this.user);
  }
  onCancel() {
    this.router.navigate(['profile']);
  }

}
