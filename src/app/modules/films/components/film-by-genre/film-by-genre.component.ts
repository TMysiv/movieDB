import {Component, OnInit} from '@angular/core';
import {FilmsService} from "../../services/films.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IMovie} from "../../../../interfaces/movie";
import {AppService} from "../../../../services/app.service";

@Component({
  selector: 'app-film-by-genre',
  templateUrl: './film-by-genre.component.html',
  styleUrls: ['./film-by-genre.component.css']
})
export class FilmByGenreComponent implements OnInit {

  pageId: number = 1;
  totalPages: number;
  films: IMovie[] = [];
  genreId: string = '';
  genreName: string = '';
  movieOrSerial: string = '';
  language:string

  constructor(private filmsService: FilmsService, private route: Router,private appService:AppService) {
  }

  ngOnInit(): void {
    this.appService.globalLanguage.subscribe(language => {

      this.language = language;


    if (this.route.url.includes('tv')) {

      this.movieOrSerial = this.route.url.slice(1, 3)
    }
    else {
      this.movieOrSerial = this.route.url.slice(1,6)
    }

    const {state} = history;
    this.genreId = state.id;
    this.genreName = state.name
    this.getFilms(this.genreId, this.pageId, this.movieOrSerial,language)
    })
  }

  private getFilms(genreId: string, pageId: number, movieOrSerial: string,language:string) {
    this.filmsService.getFilmsByGenre(genreId, pageId, movieOrSerial,language).subscribe(value => {
      this.films = value.results;
      this.totalPages = value.total_pages;
    })
  }

  onPageChange(pageId: number) {
    this.getFilms(this.genreId, pageId, this.movieOrSerial,this.language)
  }

  addMovie(film: IMovie) {
    this.appService.addMovie(film)
  }
}
