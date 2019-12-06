import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "src/app/http.service";
import { takeUntil } from "rxjs/internal/operators/takeUntil";
import { BaseComponent } from "src/app/base/base/base.component";

@Component({
  selector: "app-game-showcase",
  templateUrl: "./game-showcase.component.html",
  styleUrls: ["./game-showcase.component.scss"]
})
export class GameShowcaseComponent extends BaseComponent implements OnInit {
  @Input() game: any;

  constructor(private httpService: HttpService) {
    super();
  }

  ngOnInit() {
    this.game.collapsed = true;
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

  launchStream(game, broadcast: string) {
    this.httpService
      .getGameLink(game, broadcast)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        console.log("res :", res);
      });
  }
}
