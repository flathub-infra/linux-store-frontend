import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOfConductComponent } from './code-of-conduct.component';

describe('CodeOfConductComponent', () => {
  let component: CodeOfConductComponent;
  let fixture: ComponentFixture<CodeOfConductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeOfConductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeOfConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
