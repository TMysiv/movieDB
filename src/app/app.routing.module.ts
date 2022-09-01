import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./modules/main/components/main/main.component";

const routes:Routes = [
  {path:'' , loadChildren :() => import('./modules/main/main.module').then(value => value.MainModule)},
  {path:':id' , loadChildren :() => import('./modules/movie/movie.module').then(value => value.MovieModule)}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[],
})

export class AppRoutingModule{}
