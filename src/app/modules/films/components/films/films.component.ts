import { Component, OnInit} from '@angular/core';
import {IGenre} from "../../../../interfaces/genre";
import {FilmsService} from "../../services/films.service";
import {IMovie} from "../../../../interfaces/movie";
import {Router} from "@angular/router";
import {AppService} from "../../../../services/app.service";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  genres:IGenre[] = [];
  films:IMovie[] = [];
  movieOrSerial:string = '';
  language:string;
  pageId:number = 1;
  totalPages:number;

  constructor(private filmsService:FilmsService,private route:Router,private appService:AppService) { }

  private getFilms(pageId:number,movieOrSerial:string,language:string){
    this.filmsService.getFilms(pageId,movieOrSerial,language).subscribe(value => {
      this.films = value.results
      this.totalPages = value.total_pages
    })
  }

  ngOnInit(): void {

    this.appService.globalLanguage.subscribe(language => {

      this.language = language;

      this.movieOrSerial = this.route.url.slice(1);
      this.filmsService.getGenres(this.movieOrSerial,language).subscribe(value => {
        this.genres = value.genres
      })

      this.getFilms(this.pageId,this.movieOrSerial,language)
    })

  }

  onPageChange(page: number) {
    this.getFilms(page,this.movieOrSerial,this.language)
  }

  addMovie(film: IMovie) {
   this.appService.addMovie(film)
  }
}
