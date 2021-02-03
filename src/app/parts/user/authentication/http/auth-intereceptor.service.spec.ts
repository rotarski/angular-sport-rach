import { TestBed } from '@angular/core/testing';

import { AuthIntereceptorService } from './auth-intereceptor.service';

describe('AuthIntereceptorService', () => {
  let service: AuthIntereceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthIntereceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
