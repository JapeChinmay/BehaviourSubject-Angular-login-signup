import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productdetails } from 'src/app/Interface/productInterface';
import { ShareCartToCheckoutService } from 'src/app/share-cart-to-checkout.service';
import { dataSharingService } from 'src/app/dataSharingService';
import { userDetails } from 'src/app/Interface';
import { ProductsharingserviceService } from 'src/app/productsharingservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkOutForm!: FormGroup;

  cartProductsAtcheckout: productdetails[] = [];
  totalCartSubtotal: number = 0;
  userData: userDetails | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private shareDataWithCheckout: ShareCartToCheckoutService,
    private dataSharingService: dataSharingService,
    private productSharingService: ProductsharingserviceService
  ) {}

  ngOnInit(): void {
    this.checkOutForm = this.formBuilder.group({
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/),
        ],
      ],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      state: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      country: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      address: ['', [Validators.required]],
    });

    this.cartProductsAtcheckout = this.shareDataWithCheckout.getCartProducts();
    this.dataSharingService.getUserDataOncheckout().subscribe((comingdata) => {
      this.userData = comingdata;
    });

    this.totalCartSubtotal = this.productSharingService.getPrice();
  }
}
