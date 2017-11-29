import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;
  id: number;
  constructor(private route : ActivatedRoute,
              private todoService : TodoService,
              private router : Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params : Params) => {
          this.id = +params['id'];
          this.todo = this.todoService.getTodo(this.id);
        }
      );
  }

  onEditTodo() {
    this.router.navigate(['todo',this.id,'edit']);

  }

}
