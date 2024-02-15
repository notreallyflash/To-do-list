import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private locationService: Location 
  ) {}

  ngOnInit(): void {
    const todoId = Number(this.route.snapshot.paramMap.get('id'));
    this.todo = this.todoService.getTodoById(todoId);
  }

  goBack(){
    this.locationService.back();
  }
}
