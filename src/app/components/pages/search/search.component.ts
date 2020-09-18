import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { FitnessClasses } from 'src/app/models/fitness-classes';
import { FitnessClassesService } from '../../../services/fitness-classes.service';
import { FitnessClassesComponent } from '../../fitness-classes/fitness-classes.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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

  constructor(private fitnessClassService:FitnessClassesService) { }

  filterClasses(searchString: string) {
    return this.fitnessClasses.filter(fitnessClass => 
      fitnessClass.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 || fitnessClass.date.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  filterClassesDay(searchString: string) {
    return this.fitnessClasses.filter(fitnessClass => 
      fitnessClass.date.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  //search all value pairs
  //loop through the json objects and find the search term, return each object containing that search term

  //search by name
  //loop through json objects name key and if value equals search term, return each object containing that search term

  //search by date
  //loop through json objects day of week key and if value equals search term, return each object containing that search term

  //search by time
  //loop through json objects start time key and if value equals time searched, return each object containing that search term

  ngOnInit(): void {

    
    this.fitnessClassService.getFitnessClasses().subscribe(fitnessClasses => {
      this.fitnessClasses = fitnessClasses;

    this.filteredClasses = this.fitnessClasses;
      
    });

  }
}
