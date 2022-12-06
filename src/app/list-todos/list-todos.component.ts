import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = []
  // [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  // ]
  
  constructor(private service: TodoDataService){ }

  ngOnInit(): void {
    this.service.retrieveAllTodos('in28minutes').subscribe(
      response =>
      {
        console.log(response);
        this.todos = response;
      }
    )
  }

}
