import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDeckCard } from './page-deck-card';

describe('PageDeckCard', () => {
  let component: PageDeckCard;
  let fixture: ComponentFixture<PageDeckCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDeckCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PageDeckCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
