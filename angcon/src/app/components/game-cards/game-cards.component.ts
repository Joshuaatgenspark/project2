import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreServiceService } from 'src/app/services/genre-service.service';
import { RawgDataService } from 'src/app/services/rawg-data.service';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent implements OnInit {

  public genreGames = [];

  name: any;
  slug: any;
  public games: any;
  public genres: any;

  constructor(private rawgDataService: RawgDataService, private genreServiceService: GenreServiceService,private route: ActivatedRoute) { 
    this.slug = route.snapshot.paramMap.get('slug');
    this.name = route.snapshot.paramMap.get('name');
  }

  public innerWidth: any;

  ngOnInit(): void {
    // this.rawgDataService.getGames().subscribe( gameList => this.games = gameList.results)
    this.rawgDataService.getGenres().subscribe(genreList => this.genres = genreList.results)
  }

  
  onClick(slug: any){
   this.rawgDataService.getGamesByGenre(slug).subscribe( gameList => this.games = gameList.results)
   console.log(name);
  //  this.rawgDataService.getGenres().subscribe(genreList => this.videogames = genreList.results.games)
  }
  onClickStrategy(){
    this.genreServiceService.getGamesByStrategy().subscribe(gameList => this.games = gameList.results)
    
    this.innerWidth = window.innerWidth;
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

}
