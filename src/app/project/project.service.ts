import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    { id: 1, name: 'Tienda E-Commerce', description: 'Proyecto en proceso para terminar de levantar la página web del proyecto de tienda en línea.' },
    { id: 2, name: 'Asesorias Auditorias', description: 'Proyecto en proceso para terminar de levantar la página web del proyecto de asesorías y auditorías.' },
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProject(id: number): Observable<Project> {
    const project = this.projects.find(p => p.id === id)!;
    return of(project);
  }
}
