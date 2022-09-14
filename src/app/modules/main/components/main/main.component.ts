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
  movies: IMovie[] = [];
  language:string


  constructor(private mainService: MainService, private appService: AppService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.appService.globalLanguage.subscribe(language => {

      this.language = language

      this.mainService.getMovie('now_playing?', language).subscribe(value => {
        this.nowPlaying = value.results
      })

        this.mainService.getMovie('top_rated?', language).subscribe(value => {
        this.movies = value.results

      })

    })
  }

  addMovie(item: IMovie) {
    this.appService.addMovie(item)
  }
}
