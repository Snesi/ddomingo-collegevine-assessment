import { TestBed } from '@angular/core/testing';

import { CollegeSearchService } from './college-search.service';

describe('CollegeSearchService', () => {
  let service: CollegeSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegeSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
