import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEndMessage } from './page-end-message';

describe('PageEndMessage', () => {
  let component: PageEndMessage;
  let fixture: ComponentFixture<PageEndMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEndMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(PageEndMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
