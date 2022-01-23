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
    const url = "https://jsonplaceholder.typicode.com/photos?albumId=1";
    this.http.get(url).subscribe((res) => {
      this.data = res;
      console.log(this.data[0].albumId);
    });
  }
}
