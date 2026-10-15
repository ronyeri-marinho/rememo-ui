import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEmptyMessage } from './page-empty-message';

describe('PageEmptyMessage', () => {
  let component: PageEmptyMessage;
  let fixture: ComponentFixture<PageEmptyMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEmptyMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(PageEmptyMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
