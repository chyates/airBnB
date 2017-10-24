import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingQuickLinksComponent } from './landing-quick-links.component';

describe('LandingQuickLinksComponent', () => {
  let component: LandingQuickLinksComponent;
  let fixture: ComponentFixture<LandingQuickLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingQuickLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
