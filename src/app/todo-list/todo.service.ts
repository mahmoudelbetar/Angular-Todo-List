import { ITodo } from './itodo';
import { Injectable } from '@angular/core';
import { find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasks: ITodo[] = [{id: 1, taskName: "Learn Angular"}, {id: 2, taskName: "Learn C#"}, {id: 3, taskName: "Learn ASP.NET Core"}];

  constructor() { }

  getAllTasks(): ITodo[]{
    return this.tasks;
  }

  filterTask(taskName: string) {
    let task = this.tasks.find(t => {
      t.taskName == taskName;
    })
    return task;
  }

  addTask(task: ITodo): void {
    this.tasks.push(task);
  }

}
