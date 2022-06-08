import { TestBed } from '@angular/core/testing';

import { GeolocatorService } from './geolocator.service';

describe('GeoLocatorService', () => {
  let service: GeolocatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
