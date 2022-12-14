import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  {path:'' , loadChildren :() => import('./modules/main/main.module').then(value => value.MainModule)},
  {path:'movies/:id' , loadChildren :() => import('./modules/movie/movie.module').then(value => value.MovieModule)},
  {path:'movie' , loadChildren :() => import('./modules/films/films.module').then(value => value.FilmsModule)},
  {path:'tv', loadChildren :() => import('./modules/films/films.module').then(value => value.FilmsModule)},
  {path:'actors', loadChildren :() => import('./modules/actors/actors.module').then(value => value.ActorsModule)},
  {path:'favorites', loadChildren :() => import('./modules/favorites/favorites.module').then(value => value.FavoritesModule)},
  {path:'search', loadChildren :() => import('./modules/search/search.module').then(value => value.SearchModule)}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[],
})

export class AppRoutingModule{}
