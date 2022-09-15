import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  favorites: number;
  language: string;
  form: FormGroup;

  constructor(private appService: AppService) {
    this.createForm()
  }

  ngOnInit(): void {
    this.appService.favoriteMovies.subscribe(value => {
      this.favorites = value;
    })

    this.appService.globalLanguage.subscribe(language => {
      this.language = language
    })

  }

  chooseLanguage(language: string) {
    this.appService.chooseLanguage(language)
  }

  createForm(): void {
    this.form = new FormGroup({
      search: new FormControl('')
    })
  }

  searchMovie() {
    this.appService.searchMovie.next(this.form.value.search)
    this.form.reset()
  }
}
