import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingInfoNavComponent } from './listing-info-nav.component';

describe('ListingInfoNavComponent', () => {
  let component: ListingInfoNavComponent;
  let fixture: ComponentFixture<ListingInfoNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingInfoNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingInfoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
