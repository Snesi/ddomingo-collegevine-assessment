import { TestBed } from '@angular/core/testing';

import { GeoLocatorService } from './geo-locator.service';

describe('GeoLocatorService', () => {
  let service: GeoLocatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoLocatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
