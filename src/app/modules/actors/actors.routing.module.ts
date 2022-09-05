import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ActorsComponent} from "./components/actors/actors.component";

const routes:Routes = [
  {path:'',component:ActorsComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class ActorsRoutingModule{}
