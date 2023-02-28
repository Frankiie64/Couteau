import { TestBed } from '@angular/core/testing';

import { ServiceAgeService } from './service-age.service';

describe('ServiceAgeService', () => {
  let service: ServiceAgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
