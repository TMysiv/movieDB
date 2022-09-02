import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {IMovieDetails} from "../../../../interfaces/movie-details";
import {IVideoDetail} from "../../../../interfaces/video-details";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieDetails:IMovieDetails;
  videoDetails:IVideoDetail;

  constructor(private activatedRoute:ActivatedRoute,private movieService:MovieService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.movieService.getMovieDetails(id).subscribe(movie => {
        this.movieDetails = movie
        console.log(this.movieDetails)
      })
      this.movieService.getMovieVideo(id).subscribe(video => {
        this.videoDetails = video.results[0]
        console.log(this.videoDetails)
      })

    })
  }

}
