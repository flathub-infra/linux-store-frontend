import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreComponent } from './pre.component';

describe('PreComponent', () => {
  let component: PreComponent;
  let fixture: ComponentFixture<PreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
