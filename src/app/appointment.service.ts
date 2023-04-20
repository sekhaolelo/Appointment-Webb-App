import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  readonly apiUrl;

  constructor(private http: HttpClient, private router: Router) { 
    this.apiUrl = 'http://localhost:3000'
  }

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments`);
  }
  getAppointmentsEmployee(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments/employee/${id}`);
  }
  getAppointmentsMember(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/appointments/member/${id}`);
  }

  getMemberId(email: any): Observable<any[]> {
    console.log(email);
    return this.http.get<any[]>(`${this.apiUrl}/member/id/${email.email}`)
  }
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employees`);
  }



  createAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/appointments`, appointment);
  }


  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/employee/login`, user).pipe(
      tap(res => {
        this.router.navigateByUrl(`/appointments/employee/${res.id}`)
      })
    );
  }

  signup(user: any): Observable<any> {
    console.log(user)
    return this.http.post<any>(`${this.apiUrl}/employee/signup`, user).pipe(
      tap(() => {
        this.router.navigateByUrl('/login'); // redirect to the login page
      })
    );
  }
}
