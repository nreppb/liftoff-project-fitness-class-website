import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FitnessClasses } from '../models/fitness-classes';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FitnessClassesService {

  fitnessClassesUrl:string = 'http://localhost:5000/fitness-class';
  fitnessClassesUrlAdd:string = 'http://localhost:5000/fitness-class/add'
  
  constructor(private http:HttpClient) { }

  // Get Fitness Classes
  getFitnessClasses(): Observable<FitnessClasses[]> {
    return this.http.get<FitnessClasses[]>(this.fitnessClassesUrl);
  }

  getFitnessClass(id: string): Observable<FitnessClasses> {
    return this.http.get<FitnessClasses>(`${this.fitnessClassesUrl}/${id}`);
  }

  deleteFitnessClass(fitnessClasses: FitnessClasses):Observable<FitnessClasses> {
    // const url = `${this.fitnessClassesUrl}/${fitnessClass._id}`;
    return this.http.delete<FitnessClasses>(`${this.fitnessClassesUrl}/${fitnessClasses._id}`);
  }


  /* GET Fitness Classes whose name contains search term */



  // // Add Fitness Classes
  addFitnessClasses(fitnessclasses:FitnessClasses):Observable<FitnessClasses> {
    return this.http.post<FitnessClasses>(this.fitnessClassesUrlAdd, fitnessclasses, httpOptions);
  }

  // Toggle Completed
  // toggleCompleted(fitnessClasses: FitnessClasses):Observable<any> {
  //   const url = `${this.fitnessClassesUrl}/${fitnessClasses.userId}`
  //   return this.http.put(url, fitnessClasses, httpOptions);
  // }
  

}
