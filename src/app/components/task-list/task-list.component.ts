import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  items: any[] = [{ description: 'I need to work', title: 'Work', createdAt: new Date() }, { description: 'comb the cat', title: 'Cat', createdAt: new Date() }]

  constructor() { }

  ngOnInit(): void {
  }

}
