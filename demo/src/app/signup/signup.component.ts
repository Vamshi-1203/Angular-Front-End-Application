import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  password = "";
  errorMsg = "";
  fullName = "";
  email = "";
  confirmPassword = ""; 
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void { }
  signup() {
    if (this.fullName.trim().length === 0) {
      this.errorMsg = "Full Name is required";
    } else if (this.email.trim().length === 0) {
      this.errorMsg = "Email is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else if (this.password !== this.confirmPassword) {
      this.errorMsg = "Passwords do not match";
    } else {
      this.errorMsg = "";
      let res = this.auth.signup(this.fullName, this.email, this.password);
      if (res === 200) {
        this.router.navigate(['home']);
      } else if (res === 403) {
        this.errorMsg = "Invalid Signup Data";
      }
    }
  }
}
