import { Component, OnInit, Input } from '@angular/core';
import { FitnessClasses } from 'src/app/models/fitness-classes';
import { FitnessClassesService } from '../../services/fitness-classes.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-fitness-classes',
  templateUrl: './manage-fitness-classes.component.html',
  styleUrls: ['./manage-fitness-classes.component.css']
})
export class ManageFitnessClassesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
