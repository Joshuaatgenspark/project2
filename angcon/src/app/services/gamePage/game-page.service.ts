import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamePageService {

  private KEY = "?key=6d9368c98b03417d9a0cab226f150dc0";

  private REVIEW_KEY= "/reddit?key=6d9368c98b03417d9a0cab226f150dc0";

  private ENDPOINTS = {
    GAME_DETAILS_URL: 'https://rawg.io/api/games/',
    GAME_REVIEWS: 'https://api.rawg.io/api/games/',
  }

  constructor(private http: HttpClient) { }

  getGameDetails(slug: String): Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.GAME_DETAILS_URL + slug + this.KEY}`);
  }
  getReviews(slug: String): Observable<any>{
    return this.http.get<any>(this.ENDPOINTS.GAME_REVIEWS + slug + this.REVIEW_KEY);
  }
}
