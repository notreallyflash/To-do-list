import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Location } from '@angular/common';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailComponent implements OnInit {
  todo: Todo | undefined;
  todoForm: FormGroup = new FormGroup({});
  editing = false;
  
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private locationService: Location 
  ) {}

  ngOnInit(): void {
    const todoId = Number(this.route.snapshot.paramMap.get('id'));
    this.todo = this.todoService.getTodoById(todoId);
    this.todoForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  onEdit() {
    this.editing = true;
  }

  onSave() {
    if (this.todo && this.todoForm.valid) {
      const updatedTodo = { ...this.todo, ...this.todoForm.value };
      this.todoService.updateTodo(updatedTodo);
      this.editing = false;
      this.locationService.back();
    } else {
      alert('Please fill in all fields before saving.');
    }
  }

  goBack(){
    this.locationService.back();
  }
}
