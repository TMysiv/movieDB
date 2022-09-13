import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmsRoutingModule} from "./films.routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FilmsComponent} from "./components/films/films.component";
import {FilmsService} from "./services/films.service";
import {NgbPaginationModule, NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";
import {MovieModule} from "../movie/movie.module";
import {FilmByGenreComponent} from "./components/film-by-genre/film-by-genre.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [FilmsComponent,FilmByGenreComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    HttpClientModule,
    NgbRatingModule,
    MovieModule,
    NgbPaginationModule,
    MatIconModule,
    MatButtonModule
  ],
  providers:[FilmsService]
})
export class FilmsModule { }
