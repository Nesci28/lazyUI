import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LazyuiService {
  darkMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}
}
