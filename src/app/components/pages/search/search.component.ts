import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { FitnessClasses } from 'src/app/models/fitness-classes';
import { FitnessClassesService } from '../../../services/fitness-classes.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor(private fitnessClassService:FitnessClassesService) { }

  //search all value pairs
  //loop through the json objects and find the search term, return each object containing that search term

  //search by name
  //loop through json objects name key and if value equals search term, return each object containing that search term

  //search by date
  //loop through json objects day of week key and if value equals search term, return each object containing that search term

  //search by time
  //loop through json objects start time key and if value equals time searched, return each object containing that search term

  ngOnInit(): void {

  }
}
