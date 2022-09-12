import {Component, OnInit, ViewChild} from '@angular/core';
import {MainService} from "../../services/main.service";
import {IMovie} from "../../../../interfaces/movie";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  nowPlaying:IMovie[] = []
  movies:any=[]

  constructor(private mainService:MainService) { }

  ngOnInit(): void {

    this.mainService.getNowPlaying().subscribe(value => {
      this.nowPlaying = value.results
    })

    this.mainService.getPopular().subscribe(value => {
      this.movies.push({name:'Popular',value:value.results.slice(0, 5)})

    })

    this.mainService.getTopRated().subscribe(value => {
      this.movies.push({name:'TopRated',value:value.results.slice(0, 5)})

    })

    this.mainService.getupComing().subscribe(value => {
      this.movies.push({name:'UpComing',value:value.results.slice(10, 15)})

    })

    this.mainService.getActions().subscribe(value => {
      this.movies.push({name:'Actions',value:value.results.slice(5, 10)})

    })

    this.mainService.getHistory().subscribe(value => {
      this.movies.push({name:'History',value:value.results.slice(15, 20)})

    })
  }

  addMovie(item: any) {
    localStorage.setItem('favorites',JSON.stringify(item))
  }
}
