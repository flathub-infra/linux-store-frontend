import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsReviewsComponent } from './app-details-reviews.component';

describe('AppDetailsReviewsComponent', () => {
  let component: AppDetailsReviewsComponent;
  let fixture: ComponentFixture<AppDetailsReviewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailsReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
