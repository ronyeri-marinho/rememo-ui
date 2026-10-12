import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RememoSidebar } from './rememo-sidebar';

describe('RememoSidebar', () => {
  let component: RememoSidebar;
  let fixture: ComponentFixture<RememoSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RememoSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(RememoSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
