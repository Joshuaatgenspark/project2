import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamePageService } from 'src/app/services/game-page.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  public slug: any

  public gameDetails: any;

  public platforms: any;

  constructor(private gamePageService: GamePageService, private route: ActivatedRoute) { 
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
    this.gamePageService.getGameDetails(this.slug).subscribe(details => this.gameDetails = details)
    this.gamePageService.getGameDetails(this.slug).subscribe(details => this.platforms = details.parent_platforms)
  }

}
