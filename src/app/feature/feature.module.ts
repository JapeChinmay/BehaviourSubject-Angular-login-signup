import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

import { HomeComponent } from './home/home.component';

import { AuthService } from '../auth-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FeatureRoutingModule, HttpClientModule],
  providers: [],
})
export class FeatureModule {}
