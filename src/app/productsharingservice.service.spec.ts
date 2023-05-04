import { TestBed } from '@angular/core/testing';

import { ProductsharingserviceService } from './productsharingservice.service';

describe('ProductsharingserviceService', () => {
  let service: ProductsharingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsharingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
