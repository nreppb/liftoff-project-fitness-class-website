import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FitnessClasses } from 'src/app/models/fitness-classes';
import { FitnessClassesService } from '../../services/fitness-classes.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-fitness-class-item-instructor',
  templateUrl: './fitness-class-item-instructor.component.html',
  styleUrls: ['./fitness-class-item-instructor.component.css']
})
export class FitnessClassItemInstructorComponent implements OnInit {

  @Input() fitnessClass: FitnessClasses;
  @Output() deleteFitnessClass: EventEmitter<FitnessClasses> = new EventEmitter();

  fitnessClasses: FitnessClasses[];

  constructor(private fitnessClassesService:FitnessClassesService, private _router:Router) { }

  onDelete(fitnessClass) {
    this.deleteFitnessClass.emit(fitnessClass);
  }

  ngOnInit(): void {
  }

  onClick(fitnessClassId) {
    this._router.navigate(['/about', fitnessClassId]);
  }

  

}
