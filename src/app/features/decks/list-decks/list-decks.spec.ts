import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDecks } from './list-decks';

describe('ListDecks', () => {
  let component: ListDecks;
  let fixture: ComponentFixture<ListDecks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDecks],
    }).compileComponents();

    fixture = TestBed.createComponent(ListDecks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
