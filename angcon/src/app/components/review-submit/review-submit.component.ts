import { Component, OnInit } from '@angular/core';
import { FormControl} from "@angular/forms";

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.css']
})
export class ReviewSubmitComponent implements OnInit {
  review = new FormControl('');

  initvalue = '';

  constructor() { }

  ngOnInit(): void {
  }

}
