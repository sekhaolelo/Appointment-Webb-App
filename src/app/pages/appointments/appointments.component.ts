import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppointmentService } from '../../appointment.service';
import { Appointment } from 'src/app/models/appointment.model';
import { Employee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];
  employees: Employee[] = [];
  employeeAppointments: Appointment[] = [];
  employeeId!: string;

  constructor(private appointmentService: AppointmentService, private fb: FormBuilder,
     private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['employeeId']) {
          console.log(params['employeeId'], "given_id")
          this.employeeId= params['employeeId'];
          this.appointmentService.getAppointmentsEmployee(params['employeeId']).subscribe((employeeAppointments: any) => {
          this.appointments= employeeAppointments;
          })
        } 
        else if (params['memberId']) {
          console.log(params['memberId'], "given_id22")
          this.employeeId= params['memberId'];
          this.appointmentService.getAppointmentsMember(params['memberId']).subscribe((memberAppointments: any) => {
            console.log(memberAppointments)
          this.appointments= memberAppointments;
          })
        } 
        
        else {
          this.getAppointmentList();
        }
      }
    )
    
  }

  getAppointmentList(): void {
    this.appointmentService.getAppointments()
      .subscribe((data: any) => {
        this.appointments = data.appointments;
        
        this.employees = data.employees;
        this.employees.forEach(employee =>{
          console.log(employee.firstName)
        })
      });
  }



}