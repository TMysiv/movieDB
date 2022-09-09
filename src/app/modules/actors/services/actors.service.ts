import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IActors} from "../../../interfaces/actor";
import {IActorDetails} from "../../../interfaces/actorDetails";

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private url:string = 'https://api.themoviedb.org/3/person/'
  private apikey: string = 'api_key=4cccab37e6e3e72708b67cea6b17afb5'

  constructor(private httpClient:HttpClient) {
  }

  getActors(pageId:number):Observable<IActors>{
    return this.httpClient.get<IActors>(this.url + 'popular?' + this.apikey + `&page=${pageId}`)
  }

  getActorDetails(id:string):Observable<IActorDetails>{
    return this.httpClient.get<IActorDetails>(this.url + `${id}?` + this.apikey )
  }
}
