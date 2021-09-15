import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = 'https://rawg.io/api/games?page=1&page_size=3&key=6d9368c98b03417d9a0cab226f150dc0';

  constructor() { }

  ngOnInit(): void {
  }

}
