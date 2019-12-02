import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "lazyui";
  darkMode: boolean = true;

  darkModeSwitch(e): void {
    this.darkMode = e;
  }
}
