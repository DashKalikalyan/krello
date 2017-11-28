import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {TodoService} from "../todo.service";
import {Todo} from "../todo.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todo : Todo;
  id : number;
  editMode : boolean;
  form : NgForm;
  constructor(private route : ActivatedRoute,
              private todoService : TodoService) { }

  ngOnInit() {
    this.route.params
      .subscribe( (params : Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        if (this.editMode) {
            this.todo = this.todoService.getTodo(this.id);
            // this.form.value.text = this.todo.text;
            // this.form.value.category = this.todo.category;
            // this.form.value.priority = this.todo.priority;
            // this.form.value.toBeCompletedBy = this.todo.toBeCompletedBy;
            // this.form.value.completed = this.todo.completed;
            console.log(this.todo);
            console.log(typeof (this.form));
        }
      });
  }

}
