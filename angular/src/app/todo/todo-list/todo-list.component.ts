import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo.model';
import {StorageService} from "../../storage/storage.service";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos : Todo[];
  constructor(private storageService:StorageService,
              private todoService : TodoService) { }

  ngOnInit() {
      this.todoService.todoChanged
        .subscribe((todos : Todo[] ) => {
          console.log('emit');
          this.todos = todos;
        });
      this.storageService.getTodos();
      // console.log('getting the todos from todoService');
      // this.todos = this.todoService.getTodos();
  }

}
