import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {TodoComponent} from "./todo/todo.component";
import {ProfileComponent} from "./profile/profile.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";



const appRoutes: Routes = [
  {path:'', component: WelcomeComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
