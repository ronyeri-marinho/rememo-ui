import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageErrorMessage } from './page-error-message';

describe('PageErrorMessage', () => {
  let component: PageErrorMessage;
  let fixture: ComponentFixture<PageErrorMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageErrorMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(PageErrorMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
