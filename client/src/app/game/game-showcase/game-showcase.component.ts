import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-game-showcase",
  templateUrl: "./game-showcase.component.html",
  styleUrls: ["./game-showcase.component.scss"]
})
export class GameShowcaseComponent implements OnInit {
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
