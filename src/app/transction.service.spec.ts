import { TestBed } from '@angular/core/testing';

import { TransctionService } from './transction.service';

describe('TransctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransctionService = TestBed.get(TransctionService);
    expect(service).toBeTruthy();
  });
});
