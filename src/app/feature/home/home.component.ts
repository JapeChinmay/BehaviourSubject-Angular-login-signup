import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth-service';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

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
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(data);
    });
  }

  logOut() {
    localStorage.removeItem('SignupformData'); // delete
    this.authService.logout(); //set false;

    console.log('logged out');
    this.router.navigate(['/login']);
  }
}
