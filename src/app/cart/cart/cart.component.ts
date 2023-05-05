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

  constructor(
    private productSharingService: ProductsharingserviceService,
    private shareDataWithCheckout: ShareCartToCheckoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.productSharingService.getProducts();
    this.totalPrice = this.productSharingService.getPrice();
    console.log(this.cartProducts);
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

  removeProduct(product: productdetails) {
    if (product.productQuantity > 1) {
      const priceTobeSubtracted = product.price * product.productQuantity;
      this.totalPrice = this.totalPrice - priceTobeSubtracted;
    }

    const removedProduct = this.cartProducts.find(
      (item) => item.title === product.title
    );

    if (removedProduct) {
      const removedProductPrice = removedProduct.price;
      this.cartProducts = this.cartProducts.filter(
        (item) => item.title !== product.title
      );
      this.totalPrice -= removedProductPrice;
      if (this.totalPrice < 0) {
        this.totalPrice = 0;
      }
      // console.log('removed from parent cart');
      const productCountOnremoving = this.cartProducts.length;
      this.productSharingService.setProducts(
        this.cartProducts,
        productCountOnremoving
      );

      // console.log(this.totalPrice);
      // console.log(this.cartProducts);
      this.productSharingService.setPrice(this.totalPrice);

      console.log('after removing', this.cartProducts);
    }
  }

  addMoreUnits(product: productdetails) {
    this.totalPrice += product.price;
    this.productSharingService.setPrice(this.totalPrice);
    this.productSharingService.AddQuantity(product);
    console.log(product.productQuantity, 'addingunits');
  }

  removeUnits(product: productdetails) {
    if (product.productQuantity > 1) {
      this.totalPrice = this.totalPrice - product.price;
      this.productSharingService.setPrice(this.totalPrice);
      this.productSharingService.SubtractQuantity(product);
      console.log(product.productQuantity, 'removing units');
    }
  }
}
