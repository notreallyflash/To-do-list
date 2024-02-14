import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos = this.todoService.getTodos();

  constructor(private todoService: TodoService) {}

  markAsCompleted(id: number) {
    this.todoService.completed(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  ngOnInit(): void {}
}
