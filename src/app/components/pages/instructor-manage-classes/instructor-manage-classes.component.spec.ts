import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorManageClassesComponent } from './instructor-manage-classes.component';

describe('InstructorManageClassesComponent', () => {
  let component: InstructorManageClassesComponent;
  let fixture: ComponentFixture<InstructorManageClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorManageClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorManageClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
