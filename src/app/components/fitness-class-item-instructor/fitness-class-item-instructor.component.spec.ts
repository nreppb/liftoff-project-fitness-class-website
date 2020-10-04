import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessClassItemInstructorComponent } from './fitness-class-item-instructor.component';

describe('FitnessClassItemInstructorComponent', () => {
  let component: FitnessClassItemInstructorComponent;
  let fixture: ComponentFixture<FitnessClassItemInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessClassItemInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessClassItemInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
