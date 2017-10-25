import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSearchListingsComponent } from './inner-search-listings.component';

describe('InnerSearchListingsComponent', () => {
  let component: InnerSearchListingsComponent;
  let fixture: ComponentFixture<InnerSearchListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerSearchListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerSearchListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
