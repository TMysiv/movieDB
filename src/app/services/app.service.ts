import {Injectable} from '@angular/core';
import {IMovie} from "../interfaces/movie";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  store = new BehaviorSubject<string>('')

  constructor(private router:Router) {
  }

  addMovie(film: IMovie) {
    const movies = localStorage.getItem('favorites');
    const favorites = movies ? JSON.parse(movies) : [];
    let returnedMovie = favorites.some((movie: IMovie) => {
      return movie.id === film.id;
    });

    if (!returnedMovie) {
      favorites.push(film)
    } else {
      console.log(returnedMovie)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  chooseLanguage(lang:string){
    this.store.next(lang)
  }

}
