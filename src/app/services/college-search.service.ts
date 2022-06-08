import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {CollegeDataModel} from "../domain/college-data.model";

@Injectable({
  providedIn: 'root'
})
export class CollegeSearchService {

  collegeSearchEndpoint = 'assets/locations.json';

  private _collegeList$: BehaviorSubject<CollegeDataModel[]> = new BehaviorSubject<CollegeDataModel[]>([]);

  get collegeList$() {
    return this._collegeList$.asObservable();
  }

  constructor(private http: HttpClient) { }

  getCollegeList(): Observable<CollegeDataModel[]> {
    return this.http.get<CollegeDataModel[]>(this.collegeSearchEndpoint).pipe(
      tap(list => {
        this._collegeList$.next(list);
      })
    )
  }

}
