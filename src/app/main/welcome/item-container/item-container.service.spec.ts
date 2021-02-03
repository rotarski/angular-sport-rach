import { TestBed } from '@angular/core/testing';

import { ItemContainerService } from './item-container.service';

describe('ItemContainerService', () => {
  let service: ItemContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
