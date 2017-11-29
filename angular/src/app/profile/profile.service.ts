import { Injectable } from '@angular/core';
import {Profile} from "./profile.model";

@Injectable()
export class ProfileService {

  constructor() { }
  profile : Profile = {
    firstName :'Kalikalyan',
    lastName : 'Dash',
    email : 'kkd@gmail.com',
    phoneNumber : 9438357066
  };

  getProfile() {
    return this.profile;
  }
  updateProfile(profile : Profile) {
    this.profile = profile;
  }

}
