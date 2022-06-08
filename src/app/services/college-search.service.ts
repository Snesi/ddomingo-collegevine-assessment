import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {CollegeDataModel} from "../domain/college-data.model";


export interface GeolocationSearch {
  latitude: number;
  longitude: number;
  radius: number;
}

const milesInAKm = 0.621371;

// https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const earthRadius = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);  // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceInKm = earthRadius * c; // Distance in km
  return distanceInKm;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180)
}

function km2Miles(km: number) {
  return km * milesInAKm;
}

@Injectable({
  providedIn: 'root'
})
export class CollegeSearchService {


  collegeSearchEndpoint = 'assets/locations.json';

  private _collegeList$: BehaviorSubject<CollegeDataModel[]> = new BehaviorSubject<CollegeDataModel[]>([]);

  get collegeList$() {
    return this._collegeList$.asObservable();
  }

  constructor(private http: HttpClient) {
  }

  getCollegeList(coords?: GeolocationSearch): Observable<CollegeDataModel[]> {
    return this.http.get<CollegeDataModel[]>(this.collegeSearchEndpoint).pipe(
      map((collegeList: CollegeDataModel[]) => {
        if (!coords) return collegeList;
        const listWithDistances =  collegeList.map(college => {
          college.distance = km2Miles(getDistanceFromLatLonInKm(coords.latitude, coords.longitude, college.address__latitude, college.address__longitude))
          return college;
        });
        listWithDistances.sort((a, b) => (a.distance || 0) - (b.distance || 0));
        return listWithDistances;
      }),
      map((collegeList: CollegeDataModel[]) => {
        if (!coords) return collegeList;

        return collegeList.filter(college => (college.distance || 0) <= coords.radius);
      }),
      tap(list => {
        this._collegeList$.next(list);
      })
    )
  }
}
