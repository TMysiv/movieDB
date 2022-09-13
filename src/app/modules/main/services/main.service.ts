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

  getNowPlaying(language:string):Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.url + 'now_playing?' + this.apikey + `&language=${language}`)
  }

  getPopular(language:string):Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.url + 'popular?' + this.apikey + `&language=${language}`)
  }

  getTopRated(language:string):Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.url + 'top_rated?' + this.apikey + `&language=${language}`)
  }

  getupComing(language:string):Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.url + 'upcoming?' + this.apikey + `&language=${language}`)
  }

  getActions(language:string):Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.urlWithGenres + this.apikey + '&with_genres=28' + `&language=${language}`)
  }

  getHistory(language:string):Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.urlWithGenres  + this.apikey + '&with_genres=36' + `&language=${language}`)
  }


}
