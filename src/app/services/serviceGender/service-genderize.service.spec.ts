import { TestBed } from '@angular/core/testing';

import { ServiceGenderizeService } from './service-genderize.service';

describe('ServiceGenderizeService', () => {
  let service: ServiceGenderizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGenderizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
