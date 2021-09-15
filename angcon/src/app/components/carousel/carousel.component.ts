import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = 'https://api.rawg.io/api/games/{game_pk}/screenshots?6d9368c98b03417d9a0cab226f150dc0';

  constructor() { }

  ngOnInit(): void {
  }

}
