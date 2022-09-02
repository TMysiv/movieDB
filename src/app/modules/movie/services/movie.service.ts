import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovieDetails} from "../../../interfaces/movie-details";
import {IVideoDetails} from "../../../interfaces/video-details";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://api.themoviedb.org/3/movie/'
  private apikey:string = 'api_key=4cccab37e6e3e72708b67cea6b17afb5'

  constructor(private httpClient:HttpClient) { }

  getMovieDetails(id:string):Observable<IMovieDetails>{
    return this.httpClient.get<IMovieDetails>(this.url + id + '?' + this.apikey)
  }

  getMovieVideo(id:string):Observable<IVideoDetails>{
    return this.httpClient.get<IVideoDetails>(this.url + id + '/videos?' + this.apikey)
  }
}
