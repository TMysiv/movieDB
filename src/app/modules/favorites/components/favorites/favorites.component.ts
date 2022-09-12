import { Component, OnInit } from '@angular/core';
import {IMovie} from "../../../../interfaces/movie";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites:IMovie[];

  constructor() { }

  ngOnInit(): void {
  }

}
