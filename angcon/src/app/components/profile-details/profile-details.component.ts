import { Component, OnInit } from '@angular/core';
import { Favorites } from 'src/app/model/favorites';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent implements OnInit {
  username: any;

  public favorite = new Favorites("", "")

  public favorites: any;
  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.favoritesService.listFavorites(this.username).subscribe(data => this.favorites = data )
  }
  retrieveUser(userData: any) {}


}
