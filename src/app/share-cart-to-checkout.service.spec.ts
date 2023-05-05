import { TestBed } from '@angular/core/testing';

import { ShareCartToCheckoutService } from './share-cart-to-checkout.service';

describe('ShareCartToCheckoutService', () => {
  let service: ShareCartToCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareCartToCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
