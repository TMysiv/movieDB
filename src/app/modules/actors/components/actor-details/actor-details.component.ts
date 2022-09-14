import {Component, OnInit} from '@angular/core';
import {ActorsService} from "../../services/actors.service";
import {IActorDetails} from "../../../../interfaces/actorDetails";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css']
})
export class ActorDetailsComponent implements OnInit {

  actorDetails: IActorDetails;

  constructor(private actorsService: ActorsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

      this.activatedRoute.url.subscribe((value) => {

        const id = value[0].path;

        this.actorsService.getActorDetails(id).subscribe(value => {
          console.log(value);
          this.actorDetails = value
        })
      })

  }

}
