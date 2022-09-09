import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActorsRoutingModule} from "./actors.routing.module";
import {ActorsComponent} from "./components/actors/actors.component";
import {ActorsService} from "./services/actors.service";
import {HttpClientModule} from "@angular/common/http";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {ActorDetailsComponent} from "./components/actor-details/actor-details.component";


@NgModule({
  declarations: [ActorsComponent,ActorDetailsComponent],
    imports: [
        CommonModule,
        ActorsRoutingModule,
        HttpClientModule,
        NgbPaginationModule
    ],
  providers:[ActorsService]
})
export class ActorsModule { }
