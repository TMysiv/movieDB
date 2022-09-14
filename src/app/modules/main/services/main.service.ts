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

  constructor(private httpClient:HttpClient) { }

  getMovie(genreMovie:string,language:string):Observable<IMovies>{
    return this.httpClient.get<IMovies>(this.url + genreMovie + this.apikey + `&language=${language}`)
  }

}
