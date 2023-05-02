import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth-service';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
  providers: [AuthService],
})
export class LoginModule {}
