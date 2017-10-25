import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDashInnerNavComponent } from './guest-dash-inner-nav.component';

describe('GuestDashInnerNavComponent', () => {
  let component: GuestDashInnerNavComponent;
  let fixture: ComponentFixture<GuestDashInnerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestDashInnerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestDashInnerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
