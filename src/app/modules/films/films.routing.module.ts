import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FilmsComponent} from "./components/films/films.component";
import {FilmByGenreComponent} from "./components/film-by-genre/film-by-genre.component";
import {MovieComponent} from "../movie/component/movie/movie.component";

const routes: Routes = [
  {path: '', component: FilmsComponent},
  {path:':id',component:MovieComponent},
  {path: 'genre/:name', component: FilmByGenreComponent},
  {path:'genre/:name/:id',component:MovieComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule {
}
