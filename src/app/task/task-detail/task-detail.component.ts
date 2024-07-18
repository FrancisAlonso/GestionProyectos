import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, TaskService } from '../task.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: Task | undefined;
  taskForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      start: [''],
      end: ['']
    });
  }

  ngOnInit(): void {
    const taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTaskById(taskId).subscribe(task => {
      this.task = task;
      if (task) {
        this.taskForm.patchValue({
          start: task.schedule.start,
          end: task.schedule.end
        });
      }
    });
  }

  scheduleTask(): void {
    if (this.task) {
      this.task.schedule = this.taskForm.value;
      alert(`Task scheduled from ${this.task.schedule.start} to ${this.task.schedule.end}`);
    }
  }
}
