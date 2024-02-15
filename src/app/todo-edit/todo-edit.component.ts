import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
import { Location } from '@angular/common'; // Correct import

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todo: Todo | undefined;
  todoForm: FormGroup = new FormGroup({});
    
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

  onSave() {
    if (this.todo && this.todoForm.valid) {
      const updatedTodo = { ...this.todo, ...this.todoForm.value };
      this.todoService.updateTodo(updatedTodo);
      this.locationService.back();
    } else {
      alert('Please fill in all fields before saving.');
    }
  }

  goBack(){
    this.locationService.back();
  }
}
