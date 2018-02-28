import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCollectionTeaserComponent } from './app-collection-teaser.component';

describe('AppCollectionTeaserComponent', () => {
  let component: AppCollectionTeaserComponent;
  let fixture: ComponentFixture<AppCollectionTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCollectionTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCollectionTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
