import {IMovie} from "./movie";
import {IGenre} from "./genre";

export interface IMovieDetails extends IMovie{
  belongs_to_collection:boolean,
  budget:number,
  genres:IGenre[],
  homepage:string,
  imdb_id:string,
  production_companies:[],
  production_countries:[],
  revenue:number,
  runtime:number,
  spoken_languages:[],
  status:string,
  tagline:string
}


