import { Component } from '@angular/core';
import { AppointmentService } from '../../appointment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment.model';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  appointments: Appointment[] = [];
  employees: Employee[] = [];
  loginForm!: FormGroup;

  constructor(private appointmentService: AppointmentService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.appointmentService.login(this.loginForm.value)
      .subscribe(employee => {
        console.log(employee);
        this.loginForm.reset();
      });
  }
}
