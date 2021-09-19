import { TestBed } from '@angular/core/testing';

import { RawgDataService } from './rawg-data.service';

describe('RawgDataService', () => {
  let service: RawgDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawgDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
