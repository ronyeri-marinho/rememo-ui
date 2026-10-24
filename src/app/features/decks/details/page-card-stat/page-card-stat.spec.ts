import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCardStat } from './page-card-stat';

describe('PageCardStat', () => {
  let component: PageCardStat;
  let fixture: ComponentFixture<PageCardStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCardStat],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCardStat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
