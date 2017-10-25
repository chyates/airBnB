import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoMainComponent } from './profile-info-main.component';

describe('ProfileInfoMainComponent', () => {
  let component: ProfileInfoMainComponent;
  let fixture: ComponentFixture<ProfileInfoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
