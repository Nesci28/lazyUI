import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-home-auth",
  templateUrl: "./home-auth.component.html",
  styleUrls: ["./home-auth.component.scss"]
})
export class HomeAuthComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor() {}

  ngOnInit() {}
}
