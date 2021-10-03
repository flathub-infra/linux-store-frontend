import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsReviewsSummaryComponent } from './app-details-reviews-summary.component';

describe('AppDetailsReviewsSummaryComponent', () => {
  let component: AppDetailsReviewsSummaryComponent;
  let fixture: ComponentFixture<AppDetailsReviewsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDetailsReviewsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsReviewsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
