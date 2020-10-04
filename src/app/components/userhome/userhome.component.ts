import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';
import { Router } from '@angular/router';
import { FitnessClassesService } from '../../services/fitness-classes.service'
import { FitnessClasses } from 'src/app/models/fitness-classes';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  username:String='';
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

  private _searchTerms: string;

  get searchTerms(): string {
    return this._searchTerms;
  }

  set searchTerms(value: string) {
    this._searchTerms = value;
    this.filteredClasses = this.filterClasses(value);
  }

  filterClasses(searchString: string) {
    return this.fitnessClasses.filter(fitnessClass => 
      fitnessClass.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 || fitnessClass.date.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  filterClassesDay(searchString: string) {
    return this.fitnessClasses.filter(fitnessClass => 
      fitnessClass.date.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 || fitnessClass.date.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);

      // fitnessClass.date.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  constructor(private _user:UserAuthenticationService, private _router: Router, private fitnessClassService:FitnessClassesService) {

  this._user.user()
  .subscribe(
    data=>this.addName(data),
    error=>this._router.navigate(['/login'])
  )
}

addName(data){
  this.username = data.username;
}

  ngOnInit(): void {

    this.fitnessClassService.getFitnessClasses().subscribe(fitnessClasses => {
      this.fitnessClasses = fitnessClasses;
      this.filteredClasses = this.fitnessClasses;
    });
  }

  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/login'])},
      error=>console.error(error)
    )
  }

  deleteFitnessClass(fitnessClasses:FitnessClasses) {
    // Remove From UI
    this.fitnessClasses = this.filteredClasses.filter(f => f._id !== fitnessClasses._id);
    // Remove from server
    this.fitnessClassService.deleteFitnessClass(fitnessClasses).subscribe();
  }

  addFitnessClasses(fitnessClasses:FitnessClasses) {
    this.fitnessClassService.addFitnessClasses(fitnessClasses).subscribe(fitnessClasses => {
      this.fitnessClasses.push(fitnessClasses);
    });
  }

}