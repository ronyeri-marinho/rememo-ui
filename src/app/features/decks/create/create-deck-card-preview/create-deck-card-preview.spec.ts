import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDeckCardPreview } from './create-deck-card-preview';

describe('CreateDeckCardPreview', () => {
  let component: CreateDeckCardPreview;
  let fixture: ComponentFixture<CreateDeckCardPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDeckCardPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDeckCardPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
