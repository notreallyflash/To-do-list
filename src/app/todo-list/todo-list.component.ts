import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos = this.todoService.getTodos();

  isClicked: { [id: number]: boolean } = {};
  location: any;

  handleClick(id: number) {
    this.todoService.toggleCompleted(id); 
  }

  constructor(private todoService: TodoService) {}

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  ngOnInit(): void {}
}
