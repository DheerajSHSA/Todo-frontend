import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = []
  
  message = ''
  
  constructor(private service: TodoDataService, private router: Router){ }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos() {
    this.service.retrieveAllTodos('in28minutes').subscribe(
      response =>
      {
        console.log(response);
        this.todos = response;
      }
    )
  }

  updateTodo(id: number)
  {
    console.log(`Update ${id}`)
    this.router.navigate(['todos', id])
  }

  deleteTodo(id: number)
  {
    this.service.deleteTodo('in28minutes', id).subscribe(
      response =>
      {
        this.message = response.message
        this.refreshTodos();
      }
    )
  }

  addTodo()
  {
    this.router.navigate(['todos', -1])
  }
}
