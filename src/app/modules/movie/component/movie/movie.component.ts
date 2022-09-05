import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {IMovieDetails} from "../../../../interfaces/movie-details";
import {IVideoDetail} from "../../../../interfaces/video-details";
import {ICast} from "../../../../interfaces/cast";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieDetails:IMovieDetails;
  videoDetails:IVideoDetail;
  cast:ICast[];
  movieOrSerials:string = '';

  constructor(private activatedRoute:ActivatedRoute,
              private movieService:MovieService,
              private route:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {

      if (this.route.url.includes('tv')){
        this.movieOrSerials = this.route.url.slice(1,3)
      }
      else {

      this.movieOrSerials = this.route.url.slice(1,6)
      }
      this.movieService.getMovieDetails(id,this.movieOrSerials).subscribe(movie => {
        this.movieDetails = movie
      })
      this.movieService.getMovieVideo(id,this.movieOrSerials).subscribe(video => {
        this.videoDetails = video.results[0]
      })
      this.movieService.getCasts(id,this.movieOrSerials).subscribe(actors => {
        this.cast = actors.cast.slice(0,8)
      })

    })
  }

}
