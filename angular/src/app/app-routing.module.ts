import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {TodoComponent} from "./todo/todo.component";
import {ProfileComponent} from "./profile/profile.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {TodoDetailComponent} from "./todo/todo-detail/todo-detail.component";
import {TodoStartComponent} from "./todo/todo-start/todo-start.component";
import {TodoEditComponent} from "./todo/todo-edit/todo-edit.component";
import {ProfileEditComponent} from "./profile/profile-edit/profile-edit.component";


const appRoutes: Routes = [
  {path:'', component: WelcomeComponent},
  {path: 'todo', component: TodoComponent, children : [
    {path: '', component: TodoStartComponent},
    {path: 'new', component: TodoEditComponent},
    {path: ':id', component: TodoDetailComponent},
    {path: ':id/edit', component: TodoEditComponent}
  ]},
  {path: 'profile', component: ProfileComponent, children : [
    {path: 'edit', component: ProfileEditComponent},
  ]},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
