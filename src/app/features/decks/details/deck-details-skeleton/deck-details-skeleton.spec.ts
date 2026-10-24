import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeckDetailsSkeleton } from './deck-details-skeleton';

describe('DeckDetailsSkeleton', () => {
  let component: DeckDetailsSkeleton;
  let fixture: ComponentFixture<DeckDetailsSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckDetailsSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(DeckDetailsSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
