import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSearchSearchComponent } from './inner-search-search.component';

describe('InnerSearchSearchComponent', () => {
  let component: InnerSearchSearchComponent;
  let fixture: ComponentFixture<InnerSearchSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerSearchSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerSearchSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
