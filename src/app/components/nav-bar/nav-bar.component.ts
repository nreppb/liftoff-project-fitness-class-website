import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title:string = "OnlineFitnessClassFinder";

  constructor() { }

  ngOnInit(): void {
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

}