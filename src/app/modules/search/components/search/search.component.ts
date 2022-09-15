import { Component, OnInit } from '@angular/core';
import {IMovie} from "../../../../interfaces/movie";
import {AppService} from "../../../../services/app.service";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchMovie:IMovie[];
  pageId:number = 1;
  search:string = '';
  totalPages:number;

  constructor(private appService:AppService,private searchService:SearchService) { }

  ngOnInit(): void {
    this.appService.searchMovie.subscribe(search => {
      this.search = search;
        this.getFilms(search,this.pageId)
      })

  }

  private getFilms(search:string,pageId:number){
  this.searchService.getSearchMovies(search,pageId).subscribe(value => {
    this.searchMovie = value.results
    this.totalPages = value.total_pages
    })
  }

  onPageChange(page: number) {
    this.getFilms(this.search,page)
  }
}
