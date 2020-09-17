import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorEditProfileComponent } from './instructor-edit-profile.component';

describe('InstructorEditProfileComponent', () => {
  let component: InstructorEditProfileComponent;
  let fixture: ComponentFixture<InstructorEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
