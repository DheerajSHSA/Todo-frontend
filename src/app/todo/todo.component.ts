import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number = this.route.snapshot.params['id'];
  todo: Todo = new Todo(0, '', false, new Date())
  constructor(
    private service: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.retrieveTodo('in28minutes', this.id).subscribe(
      data => this.todo = data
    )
  }

  saveTodo() {
    this.service.updateTodo('in28minutes', this.id, this.todo)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
  }

}
