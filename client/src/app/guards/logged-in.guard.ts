import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { LazyuiService } from "../lazyui.service";

@Injectable({
  providedIn: "root"
})
export class LoggedInGuard implements CanActivate {
  constructor(private lazyuiService: LazyuiService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.lazyuiService.loggedIn$.pipe(
      map(logged => {
        if (!logged) {
          this.router.navigate([""]);
          return false;
        }
        return true;
      })
    );
  }
}
