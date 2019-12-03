import { Component, OnInit } from "@angular/core";
import { LazyuiService } from "./lazyui.service";
import { BaseComponent } from "./base/base/base.component";
import { takeUntil } from "rxjs/internal/operators/takeUntil";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent extends BaseComponent implements OnInit {
  title = "lazyui";
  darkMode: boolean = true;

  constructor(private lazyuiService: LazyuiService) {
    super();
  }

  ngOnInit() {
    this.lazyuiService.darkMode$
      .pipe(takeUntil(this.destroy$))
      .subscribe((darkMode: boolean) => {
        this.darkMode = darkMode;
      });
  }

  darkModeSwitch(e): void {
    this.lazyuiService.darkMode$.next(e);
  }
}
