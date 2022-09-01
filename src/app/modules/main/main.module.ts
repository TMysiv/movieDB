import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import {HttpClientModule} from "@angular/common/http";
import {MainService} from "./services/main.service";
import {NgbCarouselModule, NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    NgbCarouselModule,
    NgbRatingModule,
  ],
  providers:[MainService]
})
export class MainModule { }
