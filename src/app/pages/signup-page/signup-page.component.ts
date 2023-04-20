import { Component } from '@angular/core';
import { AppointmentService } from '../../appointment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  employees: Employee[] = [];
  signupForm!: FormGroup;
  constructor(private appointmentService: AppointmentService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.signupForm.value)
    this.appointmentService.signup(this.signupForm.value)
      .subscribe(employee => {
        console.log(employee);
        this.signupForm.reset();
      });
  }
}
