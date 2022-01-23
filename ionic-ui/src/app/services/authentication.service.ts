import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {
  authState = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private platform: Platform,
    private userService: UserService,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    if (this.userService.isUser()) {
      this.authState.next(true);
    }
  }

  login(username, password) {
    console.info('username: ' + username);
    this.userService.login();
    this.router.navigate(['dashboard']);
    this.authState.next(true);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
    this.authState.next(false);
  }

  isAuthenticated() {
    return this.authState.value;
  }
}
