import { Component, OnInit, Input } from '@angular/core';
import { FitnessClasses } from 'src/app/models/fitness-classes';
import { FitnessClassesService } from '../../services/fitness-classes.service'

@Component({
  selector: 'app-fitness-classes-item',
  templateUrl: './fitness-classes-item.component.html',
  styleUrls: ['./fitness-classes-item.component.css']
})
export class FitnessClassesItemComponent implements OnInit {


  @Input() fitnessClass: FitnessClasses;

  constructor(private fitnessClassesService:FitnessClassesService) { }

  ngOnInit(): void {
  }

  onToggle(fitnessClass) {
/// Toggle in UI
    fitnessClass.complete = !fitnessClass.completed;
    //Toggle on server
    this.fitnessClassesService.toggleCompleted(fitnessClass).subscribe(todo => console.log(fitnessClass));
  }

  onDelete(fitnessClass) {
    console.log('delete');
  }

}
