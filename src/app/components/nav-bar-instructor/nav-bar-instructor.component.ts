import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-instructor',
  templateUrl: './nav-bar-instructor.component.html',
  styleUrls: ['./nav-bar-instructor.component.css']
})
export class NavBarInstructorComponent implements OnInit {

  title:string = "OnlineFitnessClassFinder";

  constructor() { }

  ngOnInit(): void {
  }

}
