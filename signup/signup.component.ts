import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private actRoute: ActivatedRoute,
    private router: Router) { }

  otpVarificationPage(): void {
    this.router.navigate(['/otpVerification']);
  }
}