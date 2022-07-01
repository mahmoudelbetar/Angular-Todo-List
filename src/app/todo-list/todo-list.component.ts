import { ITodo } from './itodo';
import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  i: number = Math.floor(Math.random()*100)
  tasks = this.todoService.getAllTasks();
  countTasks = this.tasks.length;
  tsks?: ITodo[];
  isEmpty: boolean = true;

  filterTask(taskName: string){
    let regex = new RegExp(`${taskName}`, 'ig');
    if(taskName === ''){
      this.isEmpty = true;
      this.countTasks = this.tasks.length;
    } else {
    this.tsks =  this.tasks.filter((t)=> {
      return t.taskName.match(regex)
    });
    console.log(this.tsks);
    this.isEmpty = false;
    this.countTasks = this.tsks.length;
    }
  }

  addTask(taskName: string) {
    this.tasks.push({id: ++this.i, taskName: taskName});
    this.countTasks++;
  }

  removeTask(task: ITodo) {
    let t = this.tasks.indexOf(task);
    this.tasks.splice(t, 1);
    if(this.countTasks > 0) this.countTasks--;
  }

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

  }

}

