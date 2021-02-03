import { TestBed } from '@angular/core/testing';

import { KosztyService } from './koszty.service';

describe('KosztyService', () => {
  let service: KosztyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KosztyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
