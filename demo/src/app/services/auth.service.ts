import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(uname:string, pword:string) {
    if(uname === 'Team' && pword === 'Team10@') {
      return 200;
    }
    else {
      return 403;
    }
  }
  signup(fullName:string, email:string, password:string){
    if(!fullName || !email || !password){
      return 403;
    }
    else{
      return 200;
    }
  }
  
  logout() {
    this.router.navigate(['login'])
  }

}
