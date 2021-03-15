import { TestBed } from '@angular/core/testing';

import { AdminBepalenService } from './admin-bepalen.service';

describe('AdminBepalenService', () => {
  let service: AdminBepalenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBepalenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
