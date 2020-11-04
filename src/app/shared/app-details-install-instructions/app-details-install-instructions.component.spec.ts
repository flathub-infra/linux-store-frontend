import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailsInstallInstructionsComponent } from './app-details-install-instructions.component';

describe('AppDetailsInstallInstructionsComponent', () => {
  let component: AppDetailsInstallInstructionsComponent;
  let fixture: ComponentFixture<AppDetailsInstallInstructionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDetailsInstallInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailsInstallInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
