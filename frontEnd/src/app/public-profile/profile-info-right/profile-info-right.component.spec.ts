import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoRightComponent } from './profile-info-right.component';

describe('ProfileInfoRightComponent', () => {
  let component: ProfileInfoRightComponent;
  let fixture: ComponentFixture<ProfileInfoRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
