import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces/movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:IMovie[] = []

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {

    this.movieService.getMovies().subscribe(value => {
      this.movies = value.results
      console.log(this.movies)
    })
  }

}
