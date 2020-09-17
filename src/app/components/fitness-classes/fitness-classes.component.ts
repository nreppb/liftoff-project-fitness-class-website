import { Component, OnInit } from '@angular/core';
import { FitnessClasses } from '../../models/fitness-classes'
import { FitnessClassesService } from '../../services/fitness-classes.service'

@Component({
  selector: 'app-fitness-classes',
  templateUrl: './fitness-classes.component.html',
  styleUrls: ['./fitness-classes.component.css']
})
export class FitnessClassesComponent implements OnInit {

  fitnessClasses:FitnessClasses[];

  constructor(private fitnessClassService:FitnessClassesService) { 
  }

  ngOnInit(): void {

    this.fitnessClassService.getFitnessClasses().subscribe(fitnessClasses => {
      this.fitnessClasses = fitnessClasses;

      
    });

  }

  // addFitnessClasses(fitnessclasses: FitnessClasses) {
  //   this.fitnessClassService.addFitnessClasses().subscribe(fitnessclasses => {
  //     this.fitnessClasses.push(fitnessclasses);
  //   })
  // }

}
