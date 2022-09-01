import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IGenres} from "../interfaces/genre";
import {HttpClient} from "@angular/common/http";
import {IMovies} from "../interfaces/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://api.themoviedb.org/3/movie/now_playing?'

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<IMovies> {
    return this.httpClient.get<IMovies>(this.url)
  }
}
