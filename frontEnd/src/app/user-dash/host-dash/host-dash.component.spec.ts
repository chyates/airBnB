import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDashComponent } from './host-dash.component';

describe('HostDashComponent', () => {
  let component: HostDashComponent;
  let fixture: ComponentFixture<HostDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
