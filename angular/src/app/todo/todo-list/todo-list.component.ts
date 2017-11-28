import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo.model';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos : Todo[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

}
