import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorites } from 'src/app/model/favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }

  public userFavorite(favorite: Favorites): Observable<any> {
    // localhost port number to be announced
    console.log(favorite);
    return this.http.post<any>('http://localhost:9090/profile', favorite);

  }
}
