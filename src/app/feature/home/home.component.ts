import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth-service';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { dataSharingService } from 'src/app/dataSharingService';
import { productdetails } from 'src/app/Interface/productInterface';
import { ProductsharingserviceService } from 'src/app/productsharingservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products: any[] = [];
  dataFetchinginProgess: boolean = true;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private dataSharingService: dataSharingService,
    private productSharingService: ProductsharingserviceService
  ) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;

      this.products.forEach((product: productdetails) => {
        product.productQuantity = 1;
      });

      console.log(this.products);

      this.dataFetchinginProgess = false;
    });

    //
  }

  addToCart(product: productdetails): void {
    this.productSharingService.addToCart(product);
    console.log(product);

    ///////////
  }
}
