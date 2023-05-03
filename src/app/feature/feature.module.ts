import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

import { HomeComponent } from './home/home.component';

import { AuthService } from '../auth-service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Navbar/navbar/navbar.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [CommonModule, FeatureRoutingModule, HttpClientModule],
  providers: [],
})
export class FeatureModule {}
