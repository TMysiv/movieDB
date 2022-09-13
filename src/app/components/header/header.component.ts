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


  constructor(private appService:AppService) {
  }

  ngOnInit(): void {
    const movies = localStorage.getItem('favorites');
    this.favorites = (movies ? JSON.parse(movies) : []).length;
  }

  chooseLanguage(language: string) {
    this.appService.chooseLanguage(language)
  }
}
