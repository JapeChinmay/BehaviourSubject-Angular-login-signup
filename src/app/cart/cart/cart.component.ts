import { Component, OnInit } from '@angular/core';
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

  constructor(private productSharingService: ProductsharingserviceService) {}

  ngOnInit(): void {
    this.cartProducts = this.productSharingService.getProducts();
    this.totalPrice = this.productSharingService.getPrice();
  }

  removeProduct(producttitle: string) {
    this.cartProducts = this.cartProducts.filter(
      (item) => item.title !== producttitle
    );

    console.log('removed from parent cart');
  }
}
