import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FitnessClasses } from 'src/app/models/fitness-classes';

@Component({
  selector: 'app-add-fitness-class',
  templateUrl: './add-fitness-class.component.html',
  styleUrls: ['./add-fitness-class.component.css']
})
export class AddFitnessClassComponent implements OnInit {
@Output() addFitnessClasses: EventEmitter<any> = new EventEmitter();
  name:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const fitnessClasses = {
      name: this.name,
      // description: this.description,
      // date: this.date,
      // time: this.time,
      // webinar: this.webinar,
    }

    this.addFitnessClasses.emit(fitnessClasses)
  }

}
