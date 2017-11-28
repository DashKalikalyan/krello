import { Injectable, EventEmitter } from '@angular/core';
import {Todo} from './todo.model';

@Injectable()
export class TodoService {

  todoSelected = new EventEmitter<Todo>();
  todos : Todo[] = [
    new Todo ('Do the 272 assignment','study','high', false, new Date ("October 13, 2014 11:13:00"),null),
    new Todo ('Do the 180 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
    new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
    new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
    new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
    new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null),
    new Todo ('Do the 138 assignment','study','medium', false, new Date ("October 13, 2014 11:13:00"),null)
  ];
  constructor() { }

  getTodos() {
    return this.todos.slice();
  }

  getTodo(index : number) {
    return this.todos[index];
  }

}
