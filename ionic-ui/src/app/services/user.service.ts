import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedInUser: boolean;
  constructor() {}

  public isUser() {
    return this.loggedInUser;
  }

  public logout() {
    this.loggedInUser = false;
    return true;
  }

  public login() {
    this.loggedInUser = true;
    return true;
  }
}
