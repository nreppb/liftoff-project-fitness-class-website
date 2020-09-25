import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessClassDetailsComponent } from './fitness-class-details.component';

describe('FitnessClassDetailsComponent', () => {
  let component: FitnessClassDetailsComponent;
  let fixture: ComponentFixture<FitnessClassDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessClassDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessClassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
