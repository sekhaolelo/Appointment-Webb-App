import { Component } from '@angular/core';
import { AppointmentService } from '../../appointment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment.model';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent {
  appointments: Appointment[] = [];
  employees: Employee[] = [];
  appointmentForm!: FormGroup;

  constructor(private appointmentService: AppointmentService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      employeeName:[''],
      description:['']

    });
    this.getEmployees();
  
  }
  getEmployees(): void {
    this.appointmentService.getEmployees().subscribe(employees => {
      this.employees = employees;
    })

  }

  onSubmit(): void {
    console.log(this.appointmentForm.value)
    this.appointmentService.createAppointment(this.appointmentForm.value)
      .subscribe(appointment => {
        console.log(appointment);
        this.appointments.push(appointment);
        this.appointmentForm.reset();
        this.router.navigate(['../'], { relativeTo: this.route })
      });
  }
}
