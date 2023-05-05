import { Injectable } from '@angular/core';
import { productdetails } from './Interface/productInterface';

@Injectable({
  providedIn: 'root',
})
export class ShareCartToCheckoutService {
  private cartToShareWithCheckOut: productdetails[] = [];

  constructor() {}

  getCartProducts(): productdetails[] {
    return this.cartToShareWithCheckOut;
  }

  setcartProducts(products: productdetails[]) {
    this.cartToShareWithCheckOut = products;
  }
}
