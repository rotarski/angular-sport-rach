import { TestBed } from '@angular/core/testing';

import { PodmiotService } from './podmiot.service';

describe('PodmiotService', () => {
  let service: PodmiotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodmiotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
