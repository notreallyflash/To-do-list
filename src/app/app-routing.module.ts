import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// user defined components
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-details/todo-details.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

//array inside which we are creating paths for different components
const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
  { path: 'add-todo', component: TodoFormComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
