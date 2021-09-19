import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import{ Router, ActivatedRoute} from '@angular/router';
import { GenreServiceService } from 'src/app/services/genreService/genre-service.service';





@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
  event = new EventEmitter();

  genreName ='action';
  games: any;

  constructor(private genreServiceService: GenreServiceService, private router: Router) { }

  ngOnInit(): void {
    this.genreServiceService.getGamesByGenre(this.genreName).subscribe( gameList => this.games = gameList.results)
  }

  onClick(){
    this.event.emit(this.genreServiceService.getGamesByGenre(this.genreName).subscribe( gameList => this.games = gameList.results))
  }

}
