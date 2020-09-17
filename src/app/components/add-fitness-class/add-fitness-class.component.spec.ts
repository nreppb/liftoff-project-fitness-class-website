import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFitnessClassComponent } from './add-fitness-class.component';

describe('AddFitnessClassComponent', () => {
  let component: AddFitnessClassComponent;
  let fixture: ComponentFixture<AddFitnessClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFitnessClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFitnessClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
