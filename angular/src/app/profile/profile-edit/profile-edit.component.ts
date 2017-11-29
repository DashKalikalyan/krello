import { Component, OnInit } from '@angular/core';
import {Profile} from "../profile.model";
import {ProfileService} from "../profile.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profile: Profile;
  constructor(private profileService : ProfileService,
              private router : Router) { }

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
  onSubmit(form : NgForm) {
    this.profile.firstName = form.value.firstName;
    this.profile.lastName = form.value.lastName;
    this.profile.phoneNumber= form.value.phoneNumber;
    this.profile.email= form.value.email;

    this.profileService.updateProfile(this.profile);
    this.router.navigate(['profile']);
  }
  onCancel() {
    this.router.navigate(['profile']);
  }

}
