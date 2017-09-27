import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsDescriptionComponent } from './app-details-description.component';

describe('AppDetailsDescriptionComponent', () => {
  let component: AppDetailsDescriptionComponent;
  let fixture: ComponentFixture<AppDetailsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailsDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
