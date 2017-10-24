import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDashComponent } from './guest-dash.component';

describe('GuestDashComponent', () => {
  let component: GuestDashComponent;
  let fixture: ComponentFixture<GuestDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
