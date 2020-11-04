import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidebarComponent } from './app-sidebar.component';

describe('AppSidebarComponent', () => {
  let component: AppSidebarComponent;
  let fixture: ComponentFixture<AppSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
