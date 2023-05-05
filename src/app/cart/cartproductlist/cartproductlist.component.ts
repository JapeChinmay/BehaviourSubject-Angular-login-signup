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

  @Output() removeEvent = new EventEmitter<productdetails>();
  @Output() AddMoreUnitsOfProduct = new EventEmitter<productdetails>();
  @Output() RemoveUnitsOfProduct = new EventEmitter<productdetails>();

  constructor(private productSharingService: ProductsharingserviceService) {}

  addMoreUnits(product: productdetails) {
    // product.productQuantity += 1;
    this.AddMoreUnitsOfProduct.emit(product);
  }
  removeUnits(product: productdetails) {
    this.RemoveUnitsOfProduct.emit(product);
  }

  removeProduct(product: productdetails) {
    // const producttoberemoved =  this.products.find((item)=> item.title === producttitle);
    // if(producttoberemoved) {
    //      const NewTotalPrice =  producttoberemoved.price * producttoberemoved.productQuantity;
    //      this.productSharingService.setPrice(NewTotalPrice)
    // }
    this.removeEvent.emit(product);
    console.log('emitted');
    this.products = this.products.filter(
      (item) => item.title !== product.title
    );
  }
}
