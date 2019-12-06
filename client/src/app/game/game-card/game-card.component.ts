import { Component, OnInit, Input } from "@angular/core";
import { LazyuiService } from "src/app/lazyui.service";
import { takeUntil } from "rxjs/internal/operators/takeUntil";
import { BaseComponent } from "src/app/base/base/base.component";
import { HttpService } from "src/app/http.service";

@Component({
  selector: "app-game-card",
  templateUrl: "./game-card.component.html",
  styleUrls: ["./game-card.component.scss"]
})
export class GameCardComponent extends BaseComponent implements OnInit {
  @Input() game: any;
  darkMode: boolean;

  constructor(
    private lazyuiService: LazyuiService,
    private httpService: HttpService
  ) {
    super();
  }

  ngOnInit() {
    this.lazyuiService.darkMode$
      .pipe(takeUntil(this.destroy$))
      .subscribe((darkMode: boolean) => {
        this.darkMode = darkMode;
      });
  }

  getDate(date: string): string {
    return `${new Date(date).getHours()}:${new Date(date)
      .getMinutes()
      .toString()
      .padEnd(2, "0")}`;
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
