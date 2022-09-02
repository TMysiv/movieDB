import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {MovieComponent} from './component/movie/movie.component';
import {MovieService} from "./services/movie.service";
import {HttpClientModule} from "@angular/common/http";
import {YouTubePlayerModule} from "@angular/youtube-player"

@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
  ],
  providers: [MovieService]
})
export class MovieModule {
}
