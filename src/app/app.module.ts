import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AppointmentFormComponent } from './pages/appointment-form/appointment-form.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { MemberOptionsComponent } from './pages/member-options/member-options.component';
import { MemberFormComponent } from './pages/member-form/member-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    LoginPageComponent,
    SignupPageComponent,
    AppointmentFormComponent,
    AppointmentsComponent,
    MemberOptionsComponent,
    MemberFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
