import { Component, Input, Output, EventEmitter } from '@angular/core';
import { productdetails } from 'src/app/Interface/productInterface';

@Component({
  selector: 'app-cartproductlist',
  templateUrl: './cartproductlist.component.html',
  styleUrls: ['./cartproductlist.component.css'],
})
export class CartproductlistComponent {
  @Input() products: productdetails[] = [];
  @Output() removeEvent = new EventEmitter<string>();

  constructor() {}

  removeProduct(producttitle: string) {
    this.removeEvent.emit(producttitle);
    console.log('emitted');
    this.products = this.products.filter((item) => item.title !== producttitle);
  }
}
