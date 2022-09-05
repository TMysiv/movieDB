import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenres} from "../../../interfaces/genre";
import {IMovies} from "../../../interfaces/movie";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private url:string = 'https://api.themoviedb.org/3/discover/'
  private urlGenres: string = 'https://api.themoviedb.org/3/genre/'
  private apikey: string = 'api_key=4cccab37e6e3e72708b67cea6b17afb5'

  constructor(private httpClient: HttpClient) {
  }

  getGenres(movieOrSerial:string): Observable<IGenres> {
    return this.httpClient.get<IGenres>(this.urlGenres + `${movieOrSerial}/list?` + this.apikey)
  }

  getFilms(pageId:number,movieOrSerial:string):Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.url + `${movieOrSerial}?` + this.apikey + `&page=${pageId}`)
  }

  getFilmsByGenre(genreId:string,pageId:number,movieOrSerial:string):Observable<IMovies> {
    return this.httpClient.get<IMovies>(
      this.url + `${movieOrSerial}?` + this.apikey + `&with_genres=${genreId}`+ `&page=${pageId}`)
  }
}

