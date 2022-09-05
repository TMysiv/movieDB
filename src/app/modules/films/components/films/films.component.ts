import { Component, OnInit} from '@angular/core';
import {IGenre} from "../../../../interfaces/genre";
import {FilmsService} from "../../services/films.service";
import {IMovie} from "../../../../interfaces/movie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  genres:IGenre[] = [];
  films:IMovie[] = [];
  movieOrSerial:string = '';

  pageId:number = 1;

  constructor(private filmsService:FilmsService,private route:Router) { }

  private getFilms(pageId:number,movieOrSerial:string){
    this.filmsService.getFilms(pageId,movieOrSerial).subscribe(value => {
      this.films = value.results
    })
  }

  ngOnInit(): void {
    this.movieOrSerial = this.route.url.slice(1);
    this.filmsService.getGenres(this.movieOrSerial).subscribe(value => {
      this.genres = value.genres
    })

    this.getFilms(this.pageId,this.movieOrSerial)
  }

  onPageChange(page: number) {
    this.getFilms(page,this.movieOrSerial)
  }

}
