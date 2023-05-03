import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userDetails } from 'src/app/Interface';
import { AuthService } from 'src/app/auth-service';
import { dataSharingService } from 'src/app/dataSharingService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginform!: FormGroup;

  userDataFromSignup: userDetails | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private dataSharingService: dataSharingService
  ) {}

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      termsAndConditions: [false, Validators.requiredTrue],
    });

    this.dataSharingService
      .getUserDataForLogin()
      .subscribe((comingData: userDetails) => {
        this.userDataFromSignup = comingData;
        // console.log(comingData, typeof comingData);
      });
  }

  //// loginning

  onSubmit() {
    if (this.loginform.valid) {
      console.log('login called');

      // console.log('email entered:', this.loginform.value.email);
      // console.log('password entered:', this.loginform.value.password);

      // logic
      console.log(this.loginform.value);

      const SignupFormData = localStorage.getItem('SignupformData');

      if (SignupFormData) {
        const parsedData = JSON.parse(SignupFormData);
        console.log(parsedData);
        if (
          parsedData.email === this.loginform.value.email &&
          parsedData.password === this.loginform.value.password
        ) {
          this.authService.login();
          let ans = this.authService.getValue()._value;

          if (ans) {
            console.log('login true');
            this.router.navigate(['/home']);
          } else {
            console.log('login failed');
          }

          // this.authService.loggedInSubject$.subscribe((res: boolean) => {
          //   if (res) {
          //     console.log('login true');
          //     this.router.navigate(['/home']);
          //   } else {
          //     console.log('login failed');
          //   }
          // });

          // if (this.authService.getvalue()._value) {
          //   console.log('login true');
          //   this.router.navigate(['/home']);
          // } else {
          //   console.log('login false');
          // }

          // this.authService.isAuthenticated().subscribe(
          //   (authenticated: boolean) => {
          //     if (authenticated) {
          //       // console.log('from login ', authenticated);
          //       console.log('login response true');

          //       this.router.navigate(['/home']);
          //     } else {
          //       console.log('login failed');
          //       alert('login failed');
          //     }
          //   },
          //   (error) => {
          //     alert('there is a error');
          //   }
          // );
        } else {
          console.log('incorrect email or password');
          alert('incorrect email or password');
        }
      } else {
        console.log('no data called');
        alert('no data ');
      }
    } else {
      //err throw

      // this.validateAllFormField(this.loginform);
      alert('form is invalid');
    }
  }

  ///////////////////checkbox

  onChangeCheckbox(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.loginform.patchValue({ termsAndConditions: isChecked });
  }
}
