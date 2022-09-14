import {Component, OnInit} from '@angular/core';
import {ActorsService} from "../../services/actors.service";
import {IActor} from "../../../../interfaces/actor";

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: IActor[];
  pageId: number = 1;


  constructor(private actorsService: ActorsService) {
  }

  private getActors(pageId: number) {
    this.actorsService.getActors(pageId).subscribe(value => {
      this.actors = value.results
    })
  }

  ngOnInit(): void {

      this.getActors(this.pageId)
  }

  onPageChange(page: number) {
    this.getActors(page)
  }
}
