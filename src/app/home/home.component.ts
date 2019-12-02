import { Component, OnInit } from "@angular/core";
import { takeUntil } from "rxjs/internal/operators/takeUntil";

import { BaseComponent } from "../base/base/base.component";
import { HttpService } from "../http.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent extends BaseComponent implements OnInit {
  games: any;

  constructor(private httpService: HttpService) {
    super();
  }

  ngOnInit() {
    this.httpService
      .getGames()
      .pipe(takeUntil(this.destroy$))
      .subscribe(games => {
        this.games = games;
      });
  }
}
