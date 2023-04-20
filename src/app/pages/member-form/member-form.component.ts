import { Component } from '@angular/core';
import { AppointmentService } from '../../appointment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent {
  memberForm!: FormGroup;
  constructor(private appointmentService: AppointmentService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.memberForm = this.fb.group({
      email: ['', Validators.required],
    });
  }
  
  onSubmit(): void {
    console.log(this.memberForm.value)
    this.appointmentService.getMemberId(this.memberForm.value)
      .subscribe((data: any) => {
        console.log(data);
        this.memberForm.reset();
        this.router.navigateByUrl(`/appointments/member/${data.memberId}`);
      });
  }
}
