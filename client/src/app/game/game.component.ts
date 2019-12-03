import { Component, OnInit } from "@angular/core";
import { takeUntil } from "rxjs/internal/operators/takeUntil";

import { BaseComponent } from "../base/base/base.component";
import { HttpService } from "../http.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"]
})
export class GameComponent extends BaseComponent implements OnInit {
  games: any;

  constructor(private httpService: HttpService) {
    super();
  }

  ngOnInit() {
    this.httpService
      .getGames()
      .pipe(takeUntil(this.destroy$))
      .subscribe(games => {
        console.log("games :", games);
        this.games = games;
      });
  }
}
