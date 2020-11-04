import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListComponent } from './app-list.component';

describe('AppListComponent', () => {
  let component: AppListComponent;
  let fixture: ComponentFixture<AppListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
