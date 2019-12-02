import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-base",
  template: `
    <p></p>
  `,
  styles: []
})
export class BaseComponent implements OnDestroy {
  destroy$: Subject<void> = new Subject();

  constructor() {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
