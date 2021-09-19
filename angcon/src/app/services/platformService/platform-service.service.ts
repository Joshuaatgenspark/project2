import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlatformServiceService {
  constructor(private http: HttpClient) {}

  private ENDPOINTS = {
    PLATFORM_LIST_URL: 'https://api.rawg.io/api/platforms/lists/parents?',
    KEY: 'key=6d9368c98b03417d9a0cab226f150dc0',
  };

  /**
   * this method, gets the platform list that the api holds
   *
   * @returns platform api in JSON format
   */
  getPlatforms(): Observable<any> {
    return this.http.get<any>(
      this.ENDPOINTS.PLATFORM_LIST_URL + this.ENDPOINTS.KEY
    );
  }
}
