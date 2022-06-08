import { Component } from '@angular/core';
import {CollegeSearchService, GeolocationSearch} from "./services/college-search.service";
import {Geolocation, GeolocatorService} from "./services/geolocator.service";
import {map, Observable} from "rxjs";
import {CollegeDataModel} from "./domain/college-data.model";

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  collegeList$: Observable<CollegeDataModel[]>;
  latitude$: Observable<number>;
  longitude$: Observable<number>;

  constructor(private collegeSearchService: CollegeSearchService, private geolocatorService: GeolocatorService) {
    collegeSearchService.getCollegeList().subscribe()
    this.collegeList$ = collegeSearchService.collegeList$;
    geolocatorService.updateLocation()
    this.longitude$ = geolocatorService.userLocation$.pipe(map(u => u.longitude));
    this.latitude$ = geolocatorService.userLocation$.pipe(map(u => u.latitude));
  }

  handleNewCoordinates(coords: GeolocationSearch) {
    this.collegeSearchService.getCollegeList(coords).subscribe();
  }

}
