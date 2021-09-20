import { Component, OnInit } from '@angular/core';
import { FormControl} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { UserReview } from 'src/app/model/user-review';
import { ReviewSubmissionService } from 'src/app/services/review-submission/review-submission.service';

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.css']
})
export class ReviewSubmitComponent implements OnInit {
  review = new FormControl('');
  user = new UserReview('', '','')
  message = ''

  title = localStorage.getItem('gameName')

  initvalue = '';

  constructor(
    private route: ActivatedRoute,
    private reviewsubmision: ReviewSubmissionService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.reviewsubmision.SubmitReview(this.user).subscribe(data => 
      
      this.message = "Review Submitted",
      )
  }

}
