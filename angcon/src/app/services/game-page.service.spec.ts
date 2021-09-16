import { TestBed } from '@angular/core/testing';

import { GamePageService } from './game-page.service';

describe('GamePageService', () => {
  let service: GamePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
