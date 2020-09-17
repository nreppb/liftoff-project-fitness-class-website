import { Component, Inject } from '@angular/core';

// import {HttpClient} from '@angular/common/http';

// @Component({
//   selector:'app-fetch-data',
//   templateUrl: '.fetch-data.component.html'
// })



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class FetchDataComponent {
//   public fitnessClasses: FitnessClass[];

//   constructor(http:HttpClient, @Inject('localhost:5000') baseUrl: string) {
//     http.get<FitnessClass[]>(baseUrl + 'fitness-class').subscribe(result => {
//       this.fitnessClasses = result;
//     }, error => console.error(error));
//   }
// }

// interface FitnessClass {

//   name: String,
//   description: String,
//   userId: { type: String,
//   date: { type: String, required: true},
//   time: {type: String, required: true},
//   webinar: {type: String, required: true},
  
// }

export class AppComponent {
  title = 'FitnessClassFinder';

}

