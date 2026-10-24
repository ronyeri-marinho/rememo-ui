import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeckFlashcard } from './deck-flashcard';

describe('DeckFlashcard', () => {
  let component: DeckFlashcard;
  let fixture: ComponentFixture<DeckFlashcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckFlashcard],
    }).compileComponents();

    fixture = TestBed.createComponent(DeckFlashcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
