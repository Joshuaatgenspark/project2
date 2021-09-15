import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RawgDataService } from 'src/app/services/rawg-data.service';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent implements OnInit {

  public games: any;

  constructor(private rawgDataService: RawgDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.rawgDataService.getGames().subscribe( gameList => this.games = gameList.results)
  }

}
