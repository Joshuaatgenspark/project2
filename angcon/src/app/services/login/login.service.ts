import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/model/user-login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public loginUser(user: UserLogin): Observable<any> {
    // localhost port number to be announced
    return this.http.post<any>('localhost:9090/login', user);
    
  }
}
