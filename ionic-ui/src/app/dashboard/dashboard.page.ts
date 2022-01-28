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
  temperature: string;

  constructor(
    private authService: AuthenticationService,
    private http: HttpClient
  ) {
    this.getData();
  }

  ngOnInit() {}

  getData() {
    const url = "http://lennylawnmower.ddns.net:5000/bme280";
    this.http.get(url).subscribe((res) => {
      console.log("pdf:" + this.data);
      this.data = res;
      this.temperature = this.data.temperature;
    });
  }
}
