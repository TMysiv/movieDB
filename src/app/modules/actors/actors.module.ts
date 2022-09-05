import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActorsRoutingModule} from "./actors.routing.module";
import {ActorsComponent} from "./components/actors/actors.component";
import {ActorsService} from "./services/actors.service";



@NgModule({
  declarations: [ActorsComponent],
  imports: [
    CommonModule,
    ActorsRoutingModule
  ],
  providers:[ActorsService]
})
export class ActorsModule { }
