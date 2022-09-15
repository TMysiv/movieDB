import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchRoutingModule} from "./search.routing.module";
import {SearchComponent} from "./components/search/search.component";
import {HttpClientModule} from "@angular/common/http";
import {SearchService} from "./services/search.service";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    HttpClientModule,
    NgbPaginationModule
  ],
  providers:[SearchService]
})
export class SearchModule { }
