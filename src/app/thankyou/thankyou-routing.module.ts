import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankyouComponent } from './thankyou/thankyou.component';

const thankyouRoutes: Routes = [{ path: '', component: ThankyouComponent }];

@NgModule({
  imports: [RouterModule.forChild(thankyouRoutes)],
  exports: [RouterModule],
})
export class ThankyouRoutingModule {}
