import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister } from 'src/app/model/user-register';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  public registerUser(user: UserRegister): Observable<any> {
    // localhost port number to be announced
    console.log(user);
    return this.http.post<any>('http://localhost:9090/register', user);
  }
}
