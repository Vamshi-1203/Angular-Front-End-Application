// shared/user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This means the service is provided at the root level and is a singleton.
})
export class UserService {
  private loggedInUsername: string = '';

  setLoggedInUsername(username: string) {
    this.loggedInUsername = username;
  }

  getLoggedInUsername() {
    return this.loggedInUsername;
  }
}
