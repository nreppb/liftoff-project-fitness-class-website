import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessClassesItemComponent } from './fitness-classes-item.component';

describe('FitnessClassesItemComponent', () => {
  let component: FitnessClassesItemComponent;
  let fixture: ComponentFixture<FitnessClassesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessClassesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessClassesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
