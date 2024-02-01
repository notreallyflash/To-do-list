import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;
  showTodoList: boolean = false;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.todoForm.valid) {
      const newTodo = {
        id: Date.now(),
        ...this.todoForm.value,
      };
      this.todoService.addTodo(newTodo);
      this.showTodoList = true;
      this.router.navigate(['/todos']);
      this.router.navigate(['/todos']);
    }
  }

}

