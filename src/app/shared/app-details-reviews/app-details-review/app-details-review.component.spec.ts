import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsReviewComponent } from './app-details-review.component';

describe('AppDetailsReviewComponent', () => {
  let component: AppDetailsReviewComponent;
  let fixture: ComponentFixture<AppDetailsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDetailsReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
