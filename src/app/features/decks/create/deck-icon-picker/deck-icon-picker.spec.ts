import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeckIconPicker } from './deck-icon-picker';

describe('DeckIconPicker', () => {
  let component: DeckIconPicker;
  let fixture: ComponentFixture<DeckIconPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckIconPicker],
    }).compileComponents();

    fixture = TestBed.createComponent(DeckIconPicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
