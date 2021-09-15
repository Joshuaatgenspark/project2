import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawgDataService {

  private ENDPOINTS = {
    GAME_LIST_URL: 'https://rawg.io/api/games?key=6d9368c98b03417d9a0cab226f150dc0&page=1&page_size=20'
  }

  constructor(private http: HttpClient) { }
  /**
   * 
   * @returns observable of one page of games populated with 20 games
   */
  getGames(): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.GAME_LIST_URL);
  }
}
