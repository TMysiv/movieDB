import {Component, OnInit, ViewChild} from '@angular/core';
import {MainService} from "../../services/main.service";
import {IMovie} from "../../../../interfaces/movie";
import {AppService} from "../../../../services/app.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  nowPlaying: IMovie[] = [];
  movies: any = [];

  constructor(private mainService: MainService,private appService:AppService,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {

    this.appService.store.subscribe(language => {


    this.mainService.getNowPlaying(language).subscribe(value => {
      this.nowPlaying = value.results
    })

    this.mainService.getPopular(language).subscribe(value => {
      this.movies.push({name: 'Popular', value: value.results.slice(0, 5)})

    })

    this.mainService.getTopRated(language).subscribe(value => {
      this.movies.push({name: 'TopRated', value: value.results.slice(0, 5)})

    })

    this.mainService.getupComing(language).subscribe(value => {
      this.movies.push({name: 'UpComing', value: value.results.slice(10, 15)})

    })

    this.mainService.getActions(language).subscribe(value => {
      this.movies.push({name: 'Actions', value: value.results.slice(5, 10)})

    })

    this.mainService.getHistory(language).subscribe(value => {
      this.movies.push({name: 'History', value: value.results.slice(15, 20)})

    })
     })
  }

  addMovie(item: IMovie) {
    this.appService.addMovie(item)
  }
}
