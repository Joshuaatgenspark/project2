import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/model/user-login';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public loginUser(user: UserLogin): Observable<any> {
    // localhost port number to be announced
    return this.http.post<any>('http://localhost:9090/login', user);
  }
}
