import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenre, IGenres} from "../interfaces/genre";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private url = 'https://api.themoviedb.org/3/genre/movie/list?'

  constructor(private httpClient:HttpClient) { }

  getFilmsGenres():Observable<IGenres> {
    return this.httpClient.get<IGenres>(this.url)
  }

}
