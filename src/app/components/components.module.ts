import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskFormComponent } from './task-form/task-form.component'
import { MaterialModule } from '../ui/material/material.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  declarations: [
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TaskFormComponent,
    TaskListComponent
  ]
})
export class ComponentsModule { }
