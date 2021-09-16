import { TestBed } from '@angular/core/testing';

import { PlatformServiceService } from './platform-service.service';

describe('PlatformServiceService', () => {
  let service: PlatformServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
