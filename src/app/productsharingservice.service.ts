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
    const ID = product.id;
    const aleadyAdded = this.products.find((item) => item.id === ID);
    if (aleadyAdded) {
      alert('This product is already in the cart, add more units there');
    } else {
      this.products.push(product);
      this.productCont$.next(this.productCont$.value + 1);
      this.totalPriceofProducts += product.price;
    }
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

  setProducts(updatedProducts: productdetails[], productCount: number) {
    this.products = updatedProducts;
    this.productCont$.next(productCount);

    console.log('updated after removal');
  }

  setPrice(updatedPrice: number) {
    this.totalPriceofProducts = updatedPrice;
  }

  AddQuantity(product: productdetails): void {
    const ID = product.id;
    const productofWhichQuantityToBeUpdated = this.products.find(
      (itmem) => itmem.id === ID
    );
    if (productofWhichQuantityToBeUpdated) {
      productofWhichQuantityToBeUpdated.productQuantity += 1;
    }
  }
  SubtractQuantity(product: productdetails) {
    const ID = product.id;
    const productofWhichQuantityToBeSubtracted = this.products.find((item) => {
      return item.id === ID;
    });
    if (productofWhichQuantityToBeSubtracted) {
      productofWhichQuantityToBeSubtracted.productQuantity -= 1;
    }
    console.log(product.productQuantity, 'from service removing units');
  }
}
