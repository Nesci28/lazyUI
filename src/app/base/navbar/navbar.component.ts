import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  @Output() darkMode = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  toggleTheme(e): void {
    this.darkMode.emit(e.srcElement.checked);
  }
}
