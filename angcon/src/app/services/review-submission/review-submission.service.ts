import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserReview } from 'src/app/model/user-review';


@Injectable({
  providedIn: 'root'
})
export class ReviewSubmissionService {

  constructor(private http: HttpClient) { }

  public SubmitReview( user: UserReview){
    return this.http.post<any>('http://localhost:9090/review', user);
  }

  
}
