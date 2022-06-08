import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {NAVIGATOR} from "../tokens/navigator.token";

export interface Geolocation {
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class GeoLocatorService {

  private _userLocation$: BehaviorSubject<Geolocation> = new BehaviorSubject<Geolocation>({latitude: 0, longitude: 0});
  private isGeoLocationSupported$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get userLocation$() {
    return this._userLocation$.asObservable();
  }

  constructor(@Inject(NAVIGATOR) private nav: typeof navigator) {
    if (nav.geolocation) {
      this.isGeoLocationSupported$.next(true);
      this.updateLocation();
    } else {
      this.isGeoLocationSupported$.next(false);
    }
  }

  public updateLocation(latitude?: number, longitude?: number) {
    if (latitude && longitude) {
      this._userLocation$.next({latitude, longitude})
    } else {
      this.nav.geolocation.getCurrentPosition((geolocationPosition: GeolocationPosition) => {
        const {latitude, longitude} = geolocationPosition.coords;
        this._userLocation$.next({latitude, longitude})
      }, (positionError: GeolocationPositionError) => {
        // For now simply assume that it was blocked, or it doesn't work.
        this.isGeoLocationSupported$.next(false);
      })
    }
  }

}
