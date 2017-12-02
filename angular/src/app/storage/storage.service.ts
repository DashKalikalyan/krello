import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Todo} from "../todo/todo.model";
import {AuthService} from "../auth/auth.service";
import {TodoService} from "../todo/todo.service";

@Injectable()
export class StorageService {
  todos : Todo[];

  constructor(private http : HttpClient,
              private authService : AuthService,
              private todoService : TodoService) { }

  getTodos() {
    const token = this.authService.getToken();
    console.log(token);
    const header = new HttpHeaders().set('x-auth', token);
    console.log(header);
    console.log('getting todos from the back end');
    this.http.get('http://localhost:3000/todos', {headers: header})
      .subscribe((response : any) => {
        console.log('Response',response);
        this.todos = response;
        console.log('calling setTodos');
        this.todoService.setTodos(this.todos);
      });

  }

  addTodo(todo : Todo) {
    const token = this.authService.getToken();
    const header = new HttpHeaders().set('x-auth', token);
    this.http.post('http://localhost:3000/todos',todo, {headers: header})
      .subscribe((response) => {
        console.log(response);
        this.getTodos();
      });

  }

  updateTodo(index : number, todo : Todo) {
    // console.log(this.todoService.getTodo(index));
    const token = this.authService.getToken();
    console.log(token);
    const header = new HttpHeaders().set('x-auth', token).set('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept').set('Access-Control-Allow-Methods', 'PATCH, POST, GET, PUT, DELETE, OPTIONS');
    console.log(header);
    console.log('getting todos from the back end');
    this.http.put('http://localhost:3000/todos/'+this.todoService.getId(index), todo,{headers: header})
      .subscribe((response) => {
        console.log(response);
        console.log('not allowed');
        this.getTodos();
      });

  }

  deleteTodo(index : number) {
    // console.log(this.todoService.getTodo(index));
    const token = this.authService.getToken();
    console.log(token);
    const header = new HttpHeaders().set('x-auth', token).set('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept').set('Access-Control-Allow-Methods', 'PATCH, POST, GET, PUT, DELETE, OPTIONS');
    this.http.delete('http://localhost:3000/todos/'+this.todoService.getId(index),{headers: header})
      .subscribe((response) => {
        console.log('deleted:',response);
        this.getTodos();
      });

  }
}
