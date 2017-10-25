import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDashEditProfileComponent } from './host-dash-edit-profile.component';

describe('HostDashEditProfileComponent', () => {
  let component: HostDashEditProfileComponent;
  let fixture: ComponentFixture<HostDashEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostDashEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostDashEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
