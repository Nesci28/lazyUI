import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-home-showcase",
  templateUrl: "./home-showcase.component.html",
  styleUrls: ["./home-showcase.component.scss"]
})
export class HomeShowcaseComponent implements OnInit {
  @Input() game: any;

  constructor() {}

  ngOnInit() {
    this.game.collapsed = false;
  }

  getDate(date: string): string {
    return `${new Date(date).getHours()}:${new Date(date)
      .getMinutes()
      .toString()
      .padEnd(2, "0")}`;
  }

  showCollapsed(e): void {
    this.game.collapsed = !this.game.collapsed;
  }
}
