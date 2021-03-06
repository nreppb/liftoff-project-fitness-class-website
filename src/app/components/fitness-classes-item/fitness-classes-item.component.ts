import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FitnessClasses } from 'src/app/models/fitness-classes';
import { FitnessClassesService } from '../../services/fitness-classes.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-fitness-classes-item',
  templateUrl: './fitness-classes-item.component.html',
  styleUrls: ['./fitness-classes-item.component.css']
})
export class FitnessClassesItemComponent implements OnInit {

  @Input() fitnessClass: FitnessClasses;
  @Output() deleteFitnessClass: EventEmitter<FitnessClasses> = new EventEmitter();

  fitnessClasses: FitnessClasses[];

  constructor(private fitnessClassesService:FitnessClassesService, private _router:Router) { }


  ngOnInit(): void {
  }

  onClick(fitnessClassId) {
    this._router.navigate(['/about', fitnessClassId]);
  }
  
  onDelete(fitnessClass) {
    this.deleteFitnessClass.emit(fitnessClass);
  }



}
