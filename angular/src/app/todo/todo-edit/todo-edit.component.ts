import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {TodoService} from "../todo.service";
import {Todo} from "../todo.model";
import {NgForm} from "@angular/forms";
import {StorageService} from "../../storage/storage.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todo : Todo;
  id : number;
  editMode : boolean;
  constructor(private route : ActivatedRoute,
              private todoService : TodoService,
              private router : Router,
              private storageService : StorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe( (params : Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        if (this.editMode) {
            this.todo = this.todoService.getTodo(this.id);
            console.log(this.todo);
        }
        else {
          this.id= 0;
          this.todo = {
            text : null,
            category : null,
            priority : null,
            toBeCompletedBy : null,
            completed : null,
            completedAt : null
          };
        }
      });
  }

  onSubmit(form : NgForm) {
    if (this.editMode) {
      console.log(form);
      this.todo.text = form.value.text;
      this.todo.category = form.value.category;
      this.todo.priority = form.value.priority;
      this.todo.toBeCompletedBy = form.value.toBeCompletedBy;
      if (form.value.completed === 'true') {
        this.todo.completed =  true;
      } else {
        this.todo.completed =  false;
      }
      console.log(this.todo);
      this.storageService.updateTodo(this.id, this.todo);
      this.router.navigate(['todo', this.id]);
    } else {
      console.log();
      this.todo.text = form.value.text;
      this.todo.category = form.value.category;
      this.todo.priority = form.value.priority;
      this.todo.toBeCompletedBy = form.value.toBeCompletedBy;
      if (form.value.completed === 'true') {
        this.todo.completed =  true;
      } else {
        this.todo.completed =  false;
      }

      this.storageService.addTodo(this.todo);
      this.router.navigate(['todo']);
    }

  }

  onCancel() {
    if (this.editMode) {
      this.router.navigate(['todo', this.id]);
    } else {
      this.router.navigate(['todo']);
    }

  }

}
