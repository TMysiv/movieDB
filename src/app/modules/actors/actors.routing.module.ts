import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ActorsComponent} from "./components/actors/actors.component";
import {ActorDetailsComponent} from "./components/actor-details/actor-details.component";

const routes: Routes = [
  {path: '', component: ActorsComponent},
  {path: ':id', component: ActorDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ActorsRoutingModule {
}
