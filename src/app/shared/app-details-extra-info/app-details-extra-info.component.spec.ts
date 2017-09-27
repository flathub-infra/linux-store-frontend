import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsExtraInfoComponent } from './app-details-extra-info.component';

describe('AppDetailsExtraInfoComponent', () => {
  let component: AppDetailsExtraInfoComponent;
  let fixture: ComponentFixture<AppDetailsExtraInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailsExtraInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
