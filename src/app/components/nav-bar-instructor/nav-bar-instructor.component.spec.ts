import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarInstructorComponent } from './nav-bar-instructor.component';

describe('NavBarInstructorComponent', () => {
  let component: NavBarInstructorComponent;
  let fixture: ComponentFixture<NavBarInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
