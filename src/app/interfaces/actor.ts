import {IMovie} from "./movie";

export interface IActor {
  adult:boolean,
  gender:number,
  id:number,
  known_for:IMovie[],
  known_for_department:string,
  name:string,
  popularity:number,
  profile_path:string
}

export interface IActors {
  page:number,
  results:IActor[],
  total_pages:number,
  total_results:number
}
