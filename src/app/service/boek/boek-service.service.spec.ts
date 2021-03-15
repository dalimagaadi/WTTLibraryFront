import { TestBed } from '@angular/core/testing';

import { BoekServiceService } from './boek-service.service';

describe('BoekServiceService', () => {
  let service: BoekServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoekServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
