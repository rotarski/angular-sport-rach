import { TestBed } from '@angular/core/testing';

import { KlubService } from './klub.service';

describe('KlubService', () => {
  let service: KlubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
