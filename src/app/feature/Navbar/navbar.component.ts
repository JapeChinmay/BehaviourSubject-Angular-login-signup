import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth-service';
import { Router } from '@angular/router';
import { ProductsharingserviceService } from 'src/app/productsharingservice.service';
import { dataSharingService } from 'src/app/dataSharingService';
import { userDetails } from 'src/app/Interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  productCount = 0;

  loggedInUserDetails: userDetails | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private productSharingService: ProductsharingserviceService,
    private dataSharingService: dataSharingService
  ) {
    this.productSharingService.getProductCount().subscribe((count) => {
      this.productCount = count;
      console.log(count);
    });
  }

  ngOnInit(): void {
    this.dataSharingService
      .getUserDataOnNavbar()
      .subscribe((comingData: userDetails) => {
        this.loggedInUserDetails = comingData;
        console.log(comingData);
      });
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log('logout called');
  }
}
