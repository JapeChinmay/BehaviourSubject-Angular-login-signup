import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { productdetails } from 'src/app/Interface/productInterface';
import { ProductsharingserviceService } from 'src/app/productsharingservice.service';
import { ShareCartToCheckoutService } from 'src/app/share-cart-to-checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: productdetails[] = [];
  totalPrice: number = 0;
  // productQuantity: number = 1;
  IncartItems: number = 0;

  constructor(
    private productSharingService: ProductsharingserviceService,
    private shareDataWithCheckout: ShareCartToCheckoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.productSharingService.getProducts();
    this.totalPrice = this.productSharingService.getPrice();
    console.log(this.cartProducts);
    this.IncartItems = this.cartProducts.length;
  }

  toCheckout() {
    const cartProductsOnclickingcheckout = this.cartProducts;
    if (cartProductsOnclickingcheckout.length == 0) {
      alert('Your cart is empty');
    } else {
      this.shareDataWithCheckout.setcartProducts(
        cartProductsOnclickingcheckout
      );

      this.router.navigate(['/checkout']);
    }
  }

  removeProduct(producttitle: string) {
    const removedProduct = this.cartProducts.find(
      (item) => item.title === producttitle
    );
    if (removedProduct) {
      const removedProductPrice = removedProduct.price;
      this.cartProducts = this.cartProducts.filter(
        (item) => item.title !== producttitle
      );
      this.totalPrice -= removedProductPrice;
      if (this.totalPrice < 0) {
        this.totalPrice = 0;
      }
      // console.log('removed from parent cart');
      this.productSharingService.setProducts(this.cartProducts);
      // console.log(this.totalPrice);
      // console.log(this.cartProducts);
      this.productSharingService.setPrice(this.totalPrice);
      console.log('after removing', this.cartProducts);
      if (this.cartProducts.length == 0) {
        this.IncartItems = 0;
      }
    }
  }

  addMoreUnits(product: productdetails) {
    this.totalPrice += product.price;
    this.productSharingService.setPrice(this.totalPrice);
    this.productSharingService.updateQuantity(product);
  }
}
