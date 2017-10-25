import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSearchMapComponent } from './inner-search-map.component';

describe('InnerSearchMapComponent', () => {
  let component: InnerSearchMapComponent;
  let fixture: ComponentFixture<InnerSearchMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerSearchMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerSearchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
