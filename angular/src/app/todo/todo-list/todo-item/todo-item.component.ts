import { Component, OnInit, Input } from '@angular/core';
import {Todo} from "../../todo.model";


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo : Todo;
  @Input() index : number;
  constructor() { }

  ngOnInit() {
  }
}
