import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FitnessClasses } from 'src/app/models/fitness-classes';
import { FitnessClassesService } from 'src/app/services/fitness-classes.service';

@Component({
  selector: 'app-fitness-class-details',
  templateUrl: './fitness-class-details.component.html',
  styleUrls: ['./fitness-class-details.component.css']
})
export class FitnessClassDetailsComponent implements OnInit {
  // private _id: any;
  public fitnessClass: FitnessClasses;
  public error: string;
  public loading = true;

  constructor(private _route: ActivatedRoute, private fitnessClassesService: FitnessClassesService) { }

  ngOnInit(): void {
    // this._route.paramMap.subscribe(params => {
    //   this._id = params.get('id');
    //   console.log(this._id);
    //  this.fitnessClass = this.fitnessClassesService.getFitnessClass(this._id);
    const id = this._route.snapshot.paramMap.get('id');
    this.fitnessClassesService.getFitnessClass(id)
      .subscribe((fitnessClass: FitnessClasses) => {
        this.fitnessClass = fitnessClass;
        this.loading = false;
      },
      (error) => {
        this.error = error.message;
        this.loading = false;
      }
      );
    }

}
