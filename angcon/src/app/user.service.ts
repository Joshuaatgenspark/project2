import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:9090/user';
  }

  public findAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl);
  }

  public save(user: IUser) {
    return this.http.post<IUser>(this.usersUrl, user);
  }
}