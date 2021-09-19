import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RawgDataService } from 'src/app/services/rawgData/rawg-data.service';




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  public games: any

  constructor(private rawgDataService: RawgDataService, private route: ActivatedRoute ) { }



  ngOnInit(): void {
    this.rawgDataService.getNewGames().subscribe(gameList => this.games = gameList.results)
  }

}
