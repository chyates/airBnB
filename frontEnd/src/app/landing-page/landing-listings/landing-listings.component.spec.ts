import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingListingsComponent } from './landing-listings.component';

describe('LandingListingsComponent', () => {
  let component: LandingListingsComponent;
  let fixture: ComponentFixture<LandingListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
