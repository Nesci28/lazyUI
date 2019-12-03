import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeAuthComponent } from "./home/home-auth.component";
import { GameComponent } from "./game/game.component";
import { LoggedInGuard } from "./guards/logged-in.guard";

const routes: Routes = [
  { path: "", component: HomeAuthComponent },
  { path: "games", component: GameComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
