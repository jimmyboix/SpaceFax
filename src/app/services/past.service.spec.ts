import { TestBed } from '@angular/core/testing';

import { PastService } from './past.service';

describe('PastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PastService = TestBed.get(PastService);
    expect(service).toBeTruthy();
  });
});
