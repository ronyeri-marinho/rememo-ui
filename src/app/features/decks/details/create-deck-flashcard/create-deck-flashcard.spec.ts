import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDeckFlashcard } from './create-deck-flashcard';

describe('CreateDeckFlashcard', () => {
  let component: CreateDeckFlashcard;
  let fixture: ComponentFixture<CreateDeckFlashcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDeckFlashcard],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDeckFlashcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
