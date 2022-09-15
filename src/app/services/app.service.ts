import {Injectable} from '@angular/core';
import {IMovie} from "../interfaces/movie";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  globalLanguage = new BehaviorSubject<string>('')
  favoriteMovies = new BehaviorSubject<number>(0);
  searchMovie = new BehaviorSubject<string>('')

  constructor(private router:Router) {
    this.addFavoriteMovie()
  }

  addMovie(film: IMovie) {
    const movies = localStorage.getItem('favorites');
    const favorites = movies ? JSON.parse(movies) : [];
    let returnedMovie = favorites.some((movie: IMovie) => {
      return movie.id === film.id;
    });

    if (!returnedMovie) {
      favorites.push(film);
      this.favoriteMovies.next(favorites.length)
    } else {
      console.log(returnedMovie)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  addFavoriteMovie(){
    const movies = localStorage.getItem('favorites');
    const favorites = (movies ? JSON.parse(movies) : []).length;
    this.favoriteMovies.next(favorites)
  }

  chooseLanguage(lang:string){
    this.globalLanguage.next(lang)
  }

}
