import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDashEditProfileComponent } from './guest-dash-edit-profile.component';

describe('GuestDashEditProfileComponent', () => {
  let component: GuestDashEditProfileComponent;
  let fixture: ComponentFixture<GuestDashEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestDashEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestDashEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
