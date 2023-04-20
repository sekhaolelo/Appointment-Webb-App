import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { AppointmentService } from './appointment.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  constructor(private appointmentservice: AppointmentService, private router: Router, private http: HttpClient) { }

}
