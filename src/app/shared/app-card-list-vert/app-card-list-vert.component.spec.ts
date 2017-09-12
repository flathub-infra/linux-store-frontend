import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardListVertComponent } from './app-card-list-vert.component';

describe('AppCardListVertComponent', () => {
  let component: AppCardListVertComponent;
  let fixture: ComponentFixture<AppCardListVertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCardListVertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCardListVertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
