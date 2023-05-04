import { Component, Input, Output, EventEmitter } from '@angular/core';
import { productdetails } from 'src/app/Interface/productInterface';
import { ProductsharingserviceService } from 'src/app/productsharingservice.service';

@Component({
  selector: 'app-cartproductlist',
  templateUrl: './cartproductlist.component.html',
  styleUrls: ['./cartproductlist.component.css'],
})
export class CartproductlistComponent {
  @Input() products: productdetails[] = [];

  @Output() removeEvent = new EventEmitter<string>();
  @Output() AddMoreUnitsOfProduct = new EventEmitter<productdetails>();

  constructor(private productSharingService: ProductsharingserviceService) {}

  addMoreUnits(product: productdetails) {
    // product.productQuantity += 1;
    this.AddMoreUnitsOfProduct.emit(product);
  }

  removeProduct(producttitle: string) {
    this.removeEvent.emit(producttitle);
    console.log('emitted');
    this.products = this.products.filter((item) => item.title !== producttitle);
  }
}
