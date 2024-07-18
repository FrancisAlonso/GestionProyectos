import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Project, ProjectService } from '../project.service';
import { Task, TaskService } from '../../task/task.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatListModule, MatIconModule]
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  tasks: Task[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProject(id).subscribe(project => this.project = project);
    this.taskService.getTasksByProjectId(id).subscribe(tasks => this.tasks = tasks);
  }

  addTask() {
    // Logic to add a new task
  }
}
