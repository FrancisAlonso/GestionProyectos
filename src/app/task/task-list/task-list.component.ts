import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Task, TaskService } from '../task.service';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [CommonModule, RouterModule, MatListModule, MatButtonModule, MatIconModule]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  projectId!: number;

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTasksByProjectId(this.projectId).subscribe(tasks => this.tasks = tasks);
  }

  addTask() {
    // Logic to add a new task
  }
}
