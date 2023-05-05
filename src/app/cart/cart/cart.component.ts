import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { productdetails } from 'src/app/Interface/productInterface';
import { ProductsharingserviceService } from 'src/app/productsharingservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: productdetails[] = [];
  totalPrice: number = 0;
  // productQuantity: number = 1;

  constructor(private productSharingService: ProductsharingserviceService) {}

  ngOnInit(): void {
    this.cartProducts = this.productSharingService.getProducts();
    this.totalPrice = this.productSharingService.getPrice();
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
      console.log('removed from parent cart');
      this.productSharingService.setProducts(this.cartProducts);
      console.log(this.totalPrice);
      console.log(this.cartProducts);
      this.productSharingService.setPrice(this.totalPrice);
    }
  }

  addMoreUnits(product: productdetails) {
    this.totalPrice += product.price;
    this.productSharingService.setPrice(this.totalPrice);
    this.productSharingService.updateQuantity(product);
  }
}
