import { Component, OnInit } from '@angular/core';
import { FitnessClasses } from '../../models/fitness-classes'
import { FitnessClassesService } from '../../services/fitness-classes.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-fitness-classes',
  templateUrl: './fitness-classes.component.html',
  styleUrls: ['./fitness-classes.component.css']
})
export class FitnessClassesComponent implements OnInit {

  fitnessClasses:FitnessClasses[];
  filteredClasses: FitnessClasses[];
  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredClasses = this.filterClasses(value);
  }

  filterClasses(searchString: string) {
    return this.fitnessClasses.filter(fitnessClass => 
      fitnessClass.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 || fitnessClass.date.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  filterClassesDay(searchString: string) {
    return this.fitnessClasses.filter(fitnessClass => 
      fitnessClass.date.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  constructor(private fitnessClassService:FitnessClassesService,
    private _router: Router) { 
  }

  ngOnInit(): void {

    this.fitnessClassService.getFitnessClasses().subscribe(fitnessClasses => {
      this.fitnessClasses = fitnessClasses;

    this.filteredClasses = this.fitnessClasses;
      
    });

  }

  // onClick(fitnessClassId: number) {
  //   this._router.navigate(['/components', fitnessClassId]);
  // }

  // addFitnessClasses(fitnessclasses: FitnessClasses) {
  //   this.fitnessClassService.addFitnessClasses().subscribe(fitnessclasses => {
  //     this.fitnessClasses.push(fitnessclasses);
  //   })
  // }

}
