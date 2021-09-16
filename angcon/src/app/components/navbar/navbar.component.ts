import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatformServiceService } from 'src/app/services/platformSerice/platform-service.service';
import { RawgDataService } from 'src/app/services/rawg-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public platforms: any;
  constructor(
    private platformService: PlatformServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.platformService.getPlatforms().subscribe((data) => {
      this.platforms = data.results;
      console.log(this.platforms)
    });
  }
}
