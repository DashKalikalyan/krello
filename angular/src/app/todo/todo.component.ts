import { Component, OnInit } from '@angular/core';
import {Todo} from "./todo.model";
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // selectedTodo : Todo;
  constructor(private todoService : TodoService) { }

  ngOnInit() {
    // this.todoService.todoSelected
    //   .subscribe(
    //     (todo : Todo) => {
    //       this.selectedTodo = todo;
    //     }
    //   );
  }

}
