import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-form';
  formbuild = inject(FormBuilder);
  studentform: FormGroup = this.formbuild.group({
    name: [''],
    emailaddress: [''],
    age: null,
    city: [''],
    pincode: [''],
    mobileno: [''],
  });
  httpService = inject(HttpService);
  class: any[] = [];
  ToasterService = inject(ToastrService);
  ngONInit() {
    this.httpService.getClasses().subscribe((result: any) => {
      this.class = result;
      console.log(this.class);
    });
  }
  saveStudent() {
    var formvalues = this.studentform.value;
    console.log('form saved', formvalues);
    this.httpService.addStudent(formvalues).subscribe(() => {
      this.ToasterService.success('success', 'student saved');
      this.studentform.reset();
    });
  }
}
