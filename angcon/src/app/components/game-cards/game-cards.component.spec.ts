import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardsComponent } from './game-cards.component';

describe('GameCardsComponent', () => {
  let component: GameCardsComponent;
  let fixture: ComponentFixture<GameCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
