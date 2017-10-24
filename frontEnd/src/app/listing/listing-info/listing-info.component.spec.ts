import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingInfoComponent } from './listing-info.component';

describe('ListingInfoComponent', () => {
  let component: ListingInfoComponent;
  let fixture: ComponentFixture<ListingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
