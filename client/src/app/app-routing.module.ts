import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeAuthComponent } from "./home/home-auth.component";
import { GameComponent } from "./game/game.component";
import { LoggedInGuard } from "./guards/logged-in.guard";
import { StandingsComponent } from "./standings/standings/standings.component";

const routes: Routes = [
  { path: "", component: HomeAuthComponent },
  // { path: "games", component: GameComponent, canActivate: [LoggedInGuard] }
  { path: "games", component: GameComponent },
  { path: "standings", component: StandingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
