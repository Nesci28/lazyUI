import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeAuthComponent } from "./home/home-auth.component";

const routes: Routes = [{ path: "", component: HomeAuthComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
