import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartproductlistComponent } from './cartproductlist/cartproductlist.component';

const loginRoutes: Routes = [{ path: '', component: CartComponent }];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
