import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RawgDataService } from 'src/app/services/rawg-data.service';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent implements OnInit {

  public games: any;

  public key = ""

  constructor(private rawgDataService: RawgDataService, private router: Router) { }

  public innerWidth: any;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    /*
        Based on the users screen size, the number of cards displayed is altered    
    */
    if(this.innerWidth < 400 ){
      this.rawgDataService.getGamesMobileView().subscribe( gameList => this.games = gameList.results)
    } else if(this.innerWidth <= 1000 && this.innerWidth >= 768){
      this.rawgDataService.getGamesTabletView().subscribe( gameList => this.games = gameList.results)
    } else if(this.innerWidth <= 1600 && this.innerWidth >= 1024){
      this.rawgDataService.getGamesLaptopView().subscribe( gameList => this.games = gameList.results)
    } else {
    this.rawgDataService.getGamesDesktopView().subscribe( gameList => this.games = gameList.results)
    }
  }

  onGameSelect(game: any){
    this.router.navigate(['/games', game.slug])
  }

}
