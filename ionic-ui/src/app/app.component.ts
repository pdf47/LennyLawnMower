import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { Router } from "@angular/router";
import { AuthenticationService } from "./services/authentication.service";
import { getLocaleDateFormat } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  private data: any = [];

  constructor(
    private router: Router,
    private platform: Platform,
    private authenticationService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.authenticationService.authState.subscribe((state) => {
        if (state) {
          this.router.navigate(["login"]);
        } else {
          this.router.navigate(["dashboard"]);
        }
      });
    });
  }
}
