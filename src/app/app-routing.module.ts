import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { HomeComponent } from './feature/home/home.component';
import { AuthGuardService } from './auth.guards.service';

const nestedRouting: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
    //to render signup comp
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./feature/feature.module').then((m) => m.FeatureModule),
    // canActivate: [AuthGuardService],
  },

  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },

  //wildcard route
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(nestedRouting)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
