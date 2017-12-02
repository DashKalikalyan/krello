import { Injectable, EventEmitter } from '@angular/core';
import {Todo} from './todo.model';
import {Subject} from "rxjs/Subject";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";


@Injectable()
export class TodoService {

  todoSelected = new EventEmitter<Todo>();
  todoChanged = new Subject<Todo[]>();
  todos : any;
  // todos : Todo[] = [
  //   new Todo ('Do the 272 assignment','study','high', false, new Date ("October 13, 2014 11:13:00"),null),
  //   new Todo ('Do the 180 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
  //   new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
  //   new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
  //   new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
  //   new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
  //   new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null)
  // ];
  constructor() { }


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

  setTodos (todos : Todo[]) {
    console.log('setTodos');
    this.todos = todos;
    console.log('Todos got',this.todos);
    this.todoChanged.next(this.todos.slice());
  }

  getId(index : number) {
    return this.todos[index]._id;
  }

}
