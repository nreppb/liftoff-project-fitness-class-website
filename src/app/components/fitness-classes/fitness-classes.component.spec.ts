import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessClassesComponent } from './fitness-classes.component';

describe('FitnessClassesComponent', () => {
  let component: FitnessClassesComponent;
  let fixture: ComponentFixture<FitnessClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
