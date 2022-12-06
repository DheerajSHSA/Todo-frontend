import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todo';
import { HelloWorldBean } from './welcome-data.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username: string)
  {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number)
  {
    return this.http.delete<HelloWorldBean>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodo(username: string, id: number)
  {
  return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}