import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartproductlistComponent } from './cartproductlist/cartproductlist.component';
import { CartRoutingModule } from './cart-routing';
import { CartpipePipe } from '../cartpipe.pipe';

@NgModule({
  declarations: [CartComponent, CartproductlistComponent, CartpipePipe],
  imports: [CommonModule, CartRoutingModule],
})
export class CartModule {}
