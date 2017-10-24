import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDashInnerNavComponent } from './host-dash-inner-nav.component';

describe('HostDashInnerNavComponent', () => {
  let component: HostDashInnerNavComponent;
  let fixture: ComponentFixture<HostDashInnerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostDashInnerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostDashInnerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
