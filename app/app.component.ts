import { Component } from '@angular/core';

class Todo {
  id: number;
  description: string;
  done: boolean;
  constructor(id: number, description: string) {
    this.id = id;
    this.description = description;
    this.done = false;
  }
}

@Component({
    selector: 'my-app',
    template: `
      <section id="todo-app">
        <h1>Angular2 Simple Todo</h1>
        <section id="todos">
          <h2>Todos</h2>
          <ul>
            <li *ngFor="let todo of todos">
              <input type="checkbox" [(ngModel)]="todo.done">
              <span class="todo-description">{{todo.description}}</span>
              <button type="button" (click)="deleteTodo(todo.id)">X</button>
            </li>
          </ul>
          <form (ngSubmit)="createTodo(todoForm, todo)" #todoForm="ngForm">
            <input type="text" (ngModel)="newTodoInput" class="form-control" 
              name="todoDescription" required placeholder="Add a new task">
            <button type="submit" class="btn btn-default">Add todo</button>
          </form>
        </section>
      </section>
      `
})
export class AppComponent {
  id = 0;
  title = 'Generic Todo';
  todos = [ 
    new Todo(this.id++, 'Go grocery shopping'), 
    new Todo(this.id++, 'Walk dog'), 
  ];
  createTodo = function(todoForm) {
    let todo = new Todo(this.id++, todoForm.value.todoDescription);
    this.todos.push( todo );
    todoForm.reset();

    event.preventDefault();
  }
  deleteTodo = function(id) {
    this.todos = this.todos.filter( (todo) => todo.id !== id);

    event.preventDefault();
  }

}
