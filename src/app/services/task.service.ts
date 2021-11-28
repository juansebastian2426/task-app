import { Injectable } from '@angular/core';
import { TaskItem } from '../interfaces/task-item';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: TaskItem[] = [];

  constructor() { }

  addTask(task: TaskItem) {
    this.tasks.push(task)
  }
}
