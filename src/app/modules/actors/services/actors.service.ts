import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private url:string = ''
  private apikey: string = 'api_key=4cccab37e6e3e72708b67cea6b17afb5'

  constructor() {
  }
}
