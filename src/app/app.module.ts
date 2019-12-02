import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BaseComponent } from "./base/base/base.component";
import { NavbarComponent } from "./base/navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { HomeShowcaseComponent } from './home/home-showcase/home-showcase.component';
import { HomeCardComponent } from './home/home-card/home-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, BaseComponent, HomeComponent, HomeShowcaseComponent, HomeCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
