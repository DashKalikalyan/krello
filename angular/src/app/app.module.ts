import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-list/todo-item/todo-item.component';
import {AppRoutingModule} from './app-routing.module';
import {TodoService} from './todo/todo.service';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoStartComponent } from './todo/todo-start/todo-start.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    WelcomeComponent,
    HeaderComponent,
    ProfileComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoDetailComponent,
    TodoStartComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
