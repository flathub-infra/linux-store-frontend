import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardListComponent } from './app-card-list.component';

describe('AppCardListComponent', () => {
  let component: AppCardListComponent;
  let fixture: ComponentFixture<AppCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
