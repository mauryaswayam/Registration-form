import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  httpClient = inject(HttpClient);
  constructor() {}

  getClasses() {
    return this.httpClient.get('http://localhost:3000/classes');
  }
  addStudent(student: any) {
    return this.httpClient.post('http://localhost:3000/students', student);
  }
}
