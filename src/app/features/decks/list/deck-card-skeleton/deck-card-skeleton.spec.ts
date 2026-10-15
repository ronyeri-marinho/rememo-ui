import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeckCardSkeleton } from './deck-card-skeleton';

describe('DeckCardSkeleton', () => {
  let component: DeckCardSkeleton;
  let fixture: ComponentFixture<DeckCardSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckCardSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(DeckCardSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
