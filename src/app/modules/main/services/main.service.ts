import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovies} from "../../../interfaces/movie";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  apikey:string = 'api_key=4cccab37e6e3e72708b67cea6b17afb5'

  private url = 'https://api.themoviedb.org/3/movie/'
  private urlWithGenres ='https://api.themoviedb.org/3/discover/movie?'

  constructor(private httpClient:HttpClient) { }

  getNowPlaying():Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.url + 'now_playing?' + this.apikey)
  }

  getPopular():Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.url + 'popular?' + this.apikey)
  }

  getTopRated():Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.url + 'top_rated?' + this.apikey)
  }

  getupComing():Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.url + 'upcoming?' + this.apikey)
  }

  getActions():Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.urlWithGenres + this.apikey + '&with_genres=28')
  }

  getHistory():Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.urlWithGenres  + this.apikey + '&with_genres=36')
  }

}
