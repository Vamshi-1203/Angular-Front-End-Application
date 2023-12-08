import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedInUser!: string;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

  }

  goToHome() {
    this.router.navigate(['home'])
  }

  logout() {
    this.auth.logout();
    this.loggedInUser = '';
  }

  goToLogin() {
    this.router.navigate(['/login']); // Navigate to the login page
  }

  goToSignup() {
    this.router.navigate(['/signup']); // Navigate to the signup page
  }

}

