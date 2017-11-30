import { Injectable, EventEmitter } from '@angular/core';
import {Todo} from './todo.model';
import {Subject} from "rxjs/Subject";
import {Http} from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";


@Injectable()
export class TodoService {

  todoSelected = new EventEmitter<Todo>();
  todoChanged = new Subject<Todo[]>();
  todos : Todo[] = [
    new Todo ('Do the 272 assignment','study','high', false, new Date ("October 13, 2014 11:13:00"),null),
    new Todo ('Do the 180 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
    new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
    new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
    new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
    new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
    new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null)
  ];
  constructor(private http : HttpClient,
              private authService : AuthService) { }

  getTodos() {
    const token = this.authService.getToken();
    console.log(token);
    const header = new HttpHeaders().set('x-auth', token);
    console.log(header);
    console.log('getting todos from the back end');
    this.http.get('http://localhost:3000/todos', {headers: header})
      .subscribe((response) => {
        console.log(response);
      });
    console.log();
    return this.todos.slice();
  }

  getTodo(index : number) {
    return this.todos[index];
  }

  updateTodo(index : number, todo : Todo) {
    this.todos[index] = todo;
    this.todoChanged.next(this.todos.slice());
  }

  addTodo(todo : Todo) {
    this.todos.unshift(todo);
    this.todoChanged.next(this.todos.slice());
  }

}
