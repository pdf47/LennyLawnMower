import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  private data: any = [];
  temperature: number;

  constructor(
    private authService: AuthenticationService,
    private http: HttpClient
  ) {
    this.getData();
    this.temperature = 18;
  }

  ngOnInit() {}

  getData() {
    const url = "http://127.0.0.1:5000/bme280";
    this.http.get(url).subscribe((res) => {
      this.data = res;
      this.temperature = this.data[0].temperature;
    });
  }
}
