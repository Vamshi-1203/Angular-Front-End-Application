import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = "";
  password = "";
  errorMsg = "";
  fullName = "";
  email = "";
  confirmPassword = ""; 
  constructor(private auth: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void { }

  login() {
    if(this.username.trim().length === 0) {
      this.errorMsg = "Username is required";
    }
    else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    }
    else {
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password);
      if(res === 200) {
        this.userService.setLoggedInUsername(this.username);
        this.router.navigate(['home'])
      }
      if(res === 403) {
        this.errorMsg = "Invalid Credentials";
      }
    }
  }

  sign() {
    this.router.navigate(['/signup']);
  }

}