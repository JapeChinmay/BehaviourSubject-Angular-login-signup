import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { INDIVIDUALPRODUCTQUANTITY } from 'src/app/Interface/IndividualPRoductQuantity';
import { productdetails } from 'src/app/Interface/productInterface';
import { ThankyoupaeService } from 'src/app/thankyoupae.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css'],
})
export class ThankyouComponent implements OnInit {
  userCheckoutForm!: FormGroup;
  userCartProducts: productdetails[] = [];
  USERADDRESS: string = '';
  USERSTATE: string = '';
  USERCOUNTRY: string = '';
  DAYSFORSHIPPING: number = 0;
  TOTALCARTWEIGHT = 0;
  INDIVIDUALPRODUCTQUANTITY: INDIVIDUALPRODUCTQUANTITY[] = [];
  FINALNOTE: string = '';

  constructor(private ThankYoupageService: ThankyoupaeService) {}

  ngOnInit(): void {
    this.userCheckoutForm =
      this.ThankYoupageService.sendUserDataToThankYouPage().formData;
    this.userCartProducts =
      this.ThankYoupageService.sendUserDataToThankYouPage().cartProducts;

    this.extractData();
    this.deliveryNote();
  }

  extractData(): void {
    console.log(this.userCheckoutForm);

    this.USERADDRESS = this.userCheckoutForm.get('address')?.value;
    this.USERSTATE = this.userCheckoutForm.get('state')?.value;
    this.USERCOUNTRY = this.userCheckoutForm.get('country')?.value;

    this.TOTALCARTWEIGHT = this.userCartProducts.length;
  }

  deliveryNote(): void {
    console.log('deliverynote caleed');
    this.userCartProducts.forEach((item) => {
      const obj = {
        productQuantity: item.productQuantity,
      };

      this.INDIVIDUALPRODUCTQUANTITY.push(obj);
    });

    if (
      this.INDIVIDUALPRODUCTQUANTITY.length === this.userCartProducts.length
    ) {
      this.DAYSFORSHIPPING = 2;
    } else {
      let FACTOR = 2.2;
      const gapOfDays =
        this.INDIVIDUALPRODUCTQUANTITY.length - this.userCartProducts.length;
      this.DAYSFORSHIPPING = Math.floor(FACTOR * gapOfDays) + 5;
    }
    console.log(this.DAYSFORSHIPPING);
    this.FINALNOTE = `YOur order will be shipped in ${this.DAYSFORSHIPPING} days`;
  }
}
