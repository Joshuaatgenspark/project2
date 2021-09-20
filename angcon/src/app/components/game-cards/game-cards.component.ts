
import { Router } from '@angular/router';

import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RawgDataService } from 'src/app/services/rawgData/rawg-data.service';
import { GenreServiceService } from 'src/app/services/genreService/genre-service.service';
import { Favorites } from 'src/app/model/favorites';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';


@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent implements OnInit {
  username = localStorage.getItem('username')
  public favorites: any;
  favorite: any;
  message = ''

  public genreGames = [];

  name: any;
  slug: any;
  public games: any;
  public genres: any;


  constructor(private rawgDataService: RawgDataService, 
    private router: Router, 
    private genreServiceService: GenreServiceService,
    private favoritesService: FavoritesService) { }


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

    this.rawgDataService.getGenres().subscribe(genreList => this.genres = genreList.results)
  }

  
  onClick(slug: any){
   this.rawgDataService.getGamesByGenre(slug).subscribe( gameList => this.games = gameList.results)
  //  this.rawgDataService.getGenres().subscribe(genreList => this.videogames = genreList.results.games)
  }
  onClickStrategy(){
    this.genreServiceService.getGamesByStrategy().subscribe(gameList => this.games = gameList.results)
    
   

  }

  onGameSelect(game: any){
    this.router.navigate(['/games', game.slug])
  }

  SaveGameName(name: any){
    localStorage.setItem("gameName", name);
  }

  onSelect(name:any){
    this.favorites = name;
    this.favorite = new Favorites(this.username, this.favorites);
    console.log(localStorage.getItem('username'));
    console.log(this.favorites);
    this.favoritesService.userFavorite(this.favorite).subscribe(data => {
      
    }
      )

  }



}
