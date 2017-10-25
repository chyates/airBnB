import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPhotoComponent } from './listing-photo.component';

describe('ListingPhotoComponent', () => {
  let component: ListingPhotoComponent;
  let fixture: ComponentFixture<ListingPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
