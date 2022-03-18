import { TestBed } from '@angular/core/testing';

import { VerInfoService } from './ver-info.service';

describe('VerInfoService', () => {
  let service: VerInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
