import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FavoritesRoutingModule} from "./favorites.routing.module";
import {FavoritesComponent} from "./components/favorites/favorites.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class FavoritesModule { }
