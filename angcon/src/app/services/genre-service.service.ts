import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreServiceService {

  private ENDPOINTS ={
    ACTION_URL: 'https://rawg.io/api/games?key=6d9368c98b03417d9a0cab226f150dc0&genre=',
    STRATEGY_URL: 'https://rawg.io/api/games?key=6d9368c98b03417d9a0cab226f150dc0&genre=stratgey'
  }

  constructor(private http: HttpClient) { }

  getGamesByGenre(genreName: string){
    return this.http.get<any>(`${this.ENDPOINTS.ACTION_URL + genreName}`);
  }
  getGamesByStrategy(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.STRATEGY_URL)
  }
}
