import { Injectable, OnInit } from '@angular/core';
import { productdetails } from './Interface/productInterface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsharingserviceService {
  private products: productdetails[] = [];
  private productCont$ = new BehaviorSubject<number>(0);
  private totalPriceofProducts: number = 0;

  //initial

  constructor() {}

  gOnInit(): void {}

  getProducts(): productdetails[] {
    return this.products;
  }

  addToCart(product: productdetails) {
    this.products.push(product);
    this.productCont$.next(this.productCont$.value + 1);
    this.totalPriceofProducts += product.price;
  }

  updateRemovedPrice(title: string): number {
    const product = this.products.find((item) => item.title === title);
    if (product) {
      this.totalPriceofProducts -= product.price;
    }
    return this.totalPriceofProducts;
  }

  getProductCount(): BehaviorSubject<number> {
    return this.productCont$;
  }

  getPrice(): number {
    return this.totalPriceofProducts;
  }
}
