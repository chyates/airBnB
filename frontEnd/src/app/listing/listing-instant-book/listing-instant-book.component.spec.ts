import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingInstantBookComponent } from './listing-instant-book.component';

describe('ListingInstantBookComponent', () => {
  let component: ListingInstantBookComponent;
  let fixture: ComponentFixture<ListingInstantBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingInstantBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingInstantBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
