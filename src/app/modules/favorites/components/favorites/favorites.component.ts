import {Component, OnInit} from '@angular/core';
import {IMovie} from "../../../../interfaces/movie";
import {AppService} from "../../../../services/app.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: IMovie[];

  constructor(private appService:AppService) {
  }

  ngOnInit(): void {
    const movies = localStorage.getItem('favorites');
    this.favorites = movies ? JSON.parse(movies) : [];
  }

  removeMovie(film: IMovie) {
    const movies = localStorage.getItem('favorites');
    const favorites = movies ? JSON.parse(movies) : [];
    const filterMovies = favorites.filter((movie: IMovie) => movie.id !== film.id);
    localStorage.setItem('favorites', JSON.stringify(filterMovies))
    this.favorites = filterMovies;
    this.appService.favoriteMovies.next(filterMovies.length)
  }
}
