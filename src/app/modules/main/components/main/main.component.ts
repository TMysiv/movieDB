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
  popular:IMovie[] = []
  topRated:IMovie[] = []
  upComing:IMovie[] = []
  TvOnAir:IMovie[] = []
  popularSerials:IMovie[] = []

  private url = 'https://image.tmdb.org/t/p/w300/'

  constructor(private mainService:MainService) { }

  ngOnInit(): void {

    this.mainService.getNowPlaying().subscribe(value => {
      this.nowPlaying = value.results
    })

    this.mainService.getPopular().subscribe(value => {
      this.popular = value.results.slice(0,5)
    })

    this.mainService.getTopRated().subscribe(value => {
      this.topRated = value.results.slice(0,5)
    })

    this.mainService.getupComing().subscribe(value => {
      this.upComing = value.results.slice(0,5)
    })

    this.mainService.getTvOnTheAir().subscribe(value => {
      this.TvOnAir = value.results.slice(5,10)
    })

    this.mainService.getPopularSerials().subscribe(value => {
      this.popularSerials = value.results.slice(0,5)
    })
  }

}
