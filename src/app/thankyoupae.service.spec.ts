import { TestBed } from '@angular/core/testing';

import { ThankyoupaeService } from './thankyoupae.service';

describe('ThankyoupaeService', () => {
  let service: ThankyoupaeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThankyoupaeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
