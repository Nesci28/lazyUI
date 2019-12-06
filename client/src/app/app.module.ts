import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BaseComponent } from "./base/base/base.component";
import { NavbarComponent } from "./base/navbar/navbar.component";
import { GameCardComponent } from "./game/game-card/game-card.component";
import { GameShowcaseComponent } from "./game/game-showcase/game-showcase.component";
import { GameComponent } from "./game/game.component";
import { HomeAuthComponent } from "./home/home-auth.component";
import { StandingsComponent } from "./standings/standings/standings.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BaseComponent,
    GameComponent,
    GameShowcaseComponent,
    GameCardComponent,
    HomeAuthComponent,
    StandingsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
