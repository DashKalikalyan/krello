import { Component, OnInit, Input } from '@angular/core';
import {Todo} from "../../todo.model";
import {StorageService} from "../../../storage/storage.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo : Todo;
  @Input() index : number;
  constructor(private storageService : StorageService,
              private router : Router) { }

  ngOnInit() {


  }

  onDeleteTodo() {
    console.log('hi');
    this.storageService.deleteTodo(this.index);
    this.router.navigate(['todo']);
  }
}
