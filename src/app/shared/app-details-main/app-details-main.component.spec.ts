import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsMainComponent } from './app-details-main.component';

describe('AppDetailsMainComponent', () => {
  let component: AppDetailsMainComponent;
  let fixture: ComponentFixture<AppDetailsMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
