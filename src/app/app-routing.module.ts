import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AppointmentFormComponent } from './pages/appointment-form/appointment-form.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { MemberOptionsComponent } from './pages/member-options/member-options.component';
import { MemberFormComponent } from './pages/member-form/member-form.component';

const routes: Routes = [
  {path: "", component:HomeViewComponent},
  {path: "login", component:LoginPageComponent},
  {path: "signup", component:SignupPageComponent},
  {path: "create_an_appointment", component:AppointmentFormComponent},
  {path: "appointments", component:AppointmentsComponent},
  {path: "appointments/employee/:employeeId", component:AppointmentsComponent},
  {path: "appointments/member/:memberId", component:AppointmentsComponent},
  {path: "options", component:MemberOptionsComponent},
  {path: "member_appointment_enquiry", component:MemberFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
