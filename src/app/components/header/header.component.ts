import {Component, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces/movie";
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  favorites: number;
  language:string


  constructor(private appService:AppService) {
  }

  ngOnInit(): void {
    this.appService.globalLanguage.subscribe( language =>{
      this.language = language
    })
      const movies = localStorage.getItem('favorites');
      this.favorites = (movies ? JSON.parse(movies) : []).length;

  }

  chooseLanguage(language: string) {
    this.appService.chooseLanguage(language)
  }
}
