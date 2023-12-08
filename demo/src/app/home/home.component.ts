import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  exoticVegetables: any;
  vegetable: any;
  constructor(private http: HttpClient,private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getExoticVgetables();
  }

  getExoticVgetables() {
    this.http.get('http://localhost:4200/assets/data/tomato.json').subscribe((vegetables) => {
      this.exoticVegetables = vegetables;
      console.log(this.exoticVegetables)
    });
  }
  
  tomato() {
    this.router.navigate(['/tomato']);
  }

  potato() {
    this.router.navigate(['/potato']);
  }

  onion(){
    this.router.navigate(['/onion']);
  }

  lemon(){
    this.router.navigate(['/lemon']);
  }

  okra(){
    this.router.navigate(['/okra']);
  }

  displayAlert(message: string) {
    alert(message);
  }
  
}