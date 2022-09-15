import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovies} from "../../../interfaces/movie";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url:string = "https://api.themoviedb.org/3/search/movie?";
  apikey: string = 'api_key=4cccab37e6e3e72708b67cea6b17afb5'

  constructor(private httpClient:HttpClient) { }


  getSearchMovies(search:string,pageId:number):Observable<IMovies>{
    return this.httpClient.get<IMovies>( this.url + this.apikey + `&query=${search}` + `&page=${pageId}`)
  }
}
