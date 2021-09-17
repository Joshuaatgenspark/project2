import { TestBed } from '@angular/core/testing';

import { RestapiService } from './restapi.service';

describe('RestapiService', () => {
  let service: RestapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
