import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { productdetails } from './Interface/productInterface';
import { FormGroupAndUserCartData } from './Interface/FormAndUserCartData';

@Injectable({
  providedIn: 'root',
})
export class ThankyoupaeService {
  checkOutForm!: FormGroup;
  cartProductsAtThankYouPage: productdetails[] = [];

  constructor() {}

  getAndUpdateDataForThankYourPage(
    formData: FormGroup,
    cartProductsAtcheckout: productdetails[]
  ) {
    this.checkOutForm = formData;
    this.cartProductsAtThankYouPage = cartProductsAtcheckout;
    console.log(formData);
  }

  sendUserDataToThankYouPage(): FormGroupAndUserCartData {
    return {
      formData: this.checkOutForm,
      cartProducts: this.cartProductsAtThankYouPage,
    };
  }
}
