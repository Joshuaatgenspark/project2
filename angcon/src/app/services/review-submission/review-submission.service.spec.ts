import { TestBed } from '@angular/core/testing';

import { ReviewSubmissionService } from './review-submission.service';

describe('ReviewSubmissionService', () => {
  let service: ReviewSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
