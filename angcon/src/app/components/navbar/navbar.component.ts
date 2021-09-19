import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatformServiceService } from 'src/app/services/platformService/platform-service.service';


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
    });
  }
}
