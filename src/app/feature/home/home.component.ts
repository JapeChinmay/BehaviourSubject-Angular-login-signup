import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth-service';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { dataSharingService } from 'src/app/dataSharingService';
import { productdetails } from 'src/app/Interface/productInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products: any[] = [];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService,
    private dataSharingService: dataSharingService
  ) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(data);
    });

    //
  }

  addToCart(product: productdetails) {}
}
