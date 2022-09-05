import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  {path:'' , loadChildren :() => import('./modules/main/main.module').then(value => value.MainModule)},
  {path:'movies/:id' , loadChildren :() => import('./modules/movie/movie.module').then(value => value.MovieModule)},
  {path:'movie' , loadChildren :() => import('./modules/films/films.module').then(value => value.FilmsModule)},
  {path:'tv', loadChildren :() => import('./modules/films/films.module').then(value => value.FilmsModule)}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[],
})

export class AppRoutingModule{}
