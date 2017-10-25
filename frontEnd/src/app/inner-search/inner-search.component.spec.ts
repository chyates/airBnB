import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSearchComponent } from './inner-search.component';

describe('InnerSearchComponent', () => {
  let component: InnerSearchComponent;
  let fixture: ComponentFixture<InnerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
