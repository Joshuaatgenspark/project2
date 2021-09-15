import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  

  genreName: any;
  genres: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    
  }

}
