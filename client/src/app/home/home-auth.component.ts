import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { HttpService } from "../http.service";
import { Login, BackendResponse } from "../models/login.model";
import { takeUntil } from "rxjs/internal/operators/takeUntil";
import { BaseComponent } from "../base/base/base.component";
import { LazyuiService } from "../lazyui.service";

@Component({
  selector: "app-home-auth",
  templateUrl: "./home-auth.component.html",
  styleUrls: ["./home-auth.component.scss"]
})
export class HomeAuthComponent extends BaseComponent implements OnInit {
  showError: boolean = false;

  form = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(
    private router: Router,
    private httpService: HttpService,
    private lazyuiService: LazyuiService
  ) {
    super();
  }

  ngOnInit() {}

  get username() {
    return this.form.controls["username"];
  }

  get password() {
    return this.form.controls["password"];
  }

  login(): void {
    const login: Login = {
      username: this.username.value,
      password: this.password.value
    };
    this.httpService
      .login(login)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: BackendResponse) => {
        if (res.code === 500) {
          this.showError = true;
          this.lazyuiService.loggedIn$.next(true);
          this.router.navigateByUrl("/games");
        } else {
          this.showError = true;
          this.lazyuiService.loggedIn$.next(false);
        }
      });
  }
}
