import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovieDetails} from "../../../interfaces/movie-details";
import {IVideoDetails} from "../../../interfaces/video-details";
import {ICasts} from "../../../interfaces/cast";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url:string = 'https://api.themoviedb.org/3/'
  private apikey:string = 'api_key=4cccab37e6e3e72708b67cea6b17afb5'

  constructor(private httpClient:HttpClient) { }

  getMovieDetails(id:string,movieOrSerials:string,language:string):Observable<IMovieDetails>{
    return this.httpClient.get<IMovieDetails>(
      this.url + `${movieOrSerials}/` + id + '?' + this.apikey + `&language=${language}`)
  }

  getMovieVideo(id:string,movieOrSerials:string):Observable<IVideoDetails>{
    return this.httpClient.get<IVideoDetails>(
      this.url +`${movieOrSerials}/` + id + '/videos?' + this.apikey )
  }

  getCasts(id:string,movieOrSerials:string):Observable<ICasts>{
    return this.httpClient.get<ICasts>(
      this.url + `${movieOrSerials}/` + id + '/credits?' + this.apikey )
  }
}
