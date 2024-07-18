import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Task {
  id: number;
  projectId: number;
  name: string;
  description: string;
  completed: boolean;
  userStory: string;
  testPlan: string;
  estimatedTime: string;
  schedule: { start: string, end: string };
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    // Tasks for "Tienda E-Commerce"
    { id: 1, projectId: 1, name: 'Setup Project', description: 'Initialize the project structure and install necessary dependencies.', completed: false, userStory: 'As a developer, I want to set up the project structure so that I can start developing features.', testPlan: 'Verify that all dependencies are installed and the project can be built and run without errors.', estimatedTime: '2 hours', schedule: { start: '', end: '' }},
    { id: 2, projectId: 1, name: 'Design Homepage', description: 'Create the design for the homepage, including layout and styling.', completed: false, userStory: 'As a user, I want a visually appealing homepage so that I have a good first impression of the site.', testPlan: 'Check that the homepage matches the design specifications and is responsive.', estimatedTime: '4 hours', schedule: { start: '', end: '' }},
    { id: 3, projectId: 1, name: 'Implement Product Listing', description: 'Develop the product listing page with filtering and sorting features.', completed: false, userStory: 'As a customer, I want to view and filter products so that I can find what I need easily.', testPlan: 'Ensure that products can be filtered and sorted correctly.', estimatedTime: '6 hours', schedule: { start: '', end: '' }},
    { id: 4, projectId: 1, name: 'Create Shopping Cart', description: 'Implement the shopping cart functionality.', completed: false, userStory: 'As a customer, I want to add products to a cart so that I can purchase multiple items at once.', testPlan: 'Verify that items can be added and removed from the cart, and that the cart persists.', estimatedTime: '3 hours', schedule: { start: '', end: '' }},
    { id: 5, projectId: 1, name: 'Setup Payment Gateway', description: 'Integrate payment gateway for processing transactions.', completed: false, userStory: 'As a customer, I want to pay for my purchases securely.', testPlan: 'Test transactions with the payment gateway to ensure they are processed correctly.', estimatedTime: '5 hours', schedule: { start: '', end: '' }},
    // Tasks for "Asesorias Auditorias"
    { id: 6, projectId: 2, name: 'Client Onboarding', description: 'Develop the client onboarding process.', completed: false, userStory: 'As a new client, I want to be onboarded easily so that I can start using the services.', testPlan: 'Verify that the onboarding process is smooth and all required information is collected.', estimatedTime: '3 hours', schedule: { start: '', end: '' }},
    { id: 7, projectId: 2, name: 'Design Dashboard', description: 'Create the dashboard design for clients.', completed: false, userStory: 'As a client, I want a dashboard to view my audit reports.', testPlan: 'Ensure the dashboard is user-friendly and displays all necessary information.', estimatedTime: '4 hours', schedule: { start: '', end: '' }},
    { id: 8, projectId: 2, name: 'Implement Reports', description: 'Develop the reports section for audit results.', completed: false, userStory: 'As a client, I want to see detailed audit reports.', testPlan: 'Check that reports are generated accurately and can be accessed easily.', estimatedTime: '5 hours', schedule: { start: '', end: '' }},
    { id: 9, projectId: 2, name: 'Setup Notification System', description: 'Implement notification system for client updates.', completed: false, userStory: 'As a client, I want to receive updates about my audits.', testPlan: 'Test that notifications are sent correctly and promptly.', estimatedTime: '2 hours', schedule: { start: '', end: '' }},
    { id: 10, projectId: 2, name: 'Optimize Performance', description: 'Ensure the platform performs efficiently under load.', completed: false, userStory: 'As a client, I want the platform to be fast and responsive.', testPlan: 'Conduct performance tests and optimize any bottlenecks.', estimatedTime: '6 hours', schedule: { start: '', end: '' }}
  ];

  getTasksByProjectId(projectId: number): Observable<Task[]> {
    return of(this.tasks.filter(task => task.projectId === projectId));
  }

  getTaskById(taskId: number): Observable<Task> {
    return of(this.tasks.find(task => task.id === taskId) as Task);
  }
}
