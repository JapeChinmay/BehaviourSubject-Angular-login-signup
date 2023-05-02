import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupform!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.signupform = this.formBuilder.group(
      {
        firstname: [
          '',
          [Validators.required, Validators.pattern('^[a-zA-Z]+$')],
        ],
        lastname: [
          '',
          [Validators.required, Validators.pattern('^[a-zA-Z ]+$')],
        ],

        email: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'
            ),
          ],
        ],

        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmpassword: ['', Validators.required],
        phone: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern('^[0-9]+$'),
          ],
        ],
        birthdate: ['', Validators.required],

        termsAndConditions: [false, Validators.requiredTrue],
      },
      {
        validators: this.passCheck.bind(this),
      }
    );
  }

  onSignup() {
    if (this.signupform.valid) {
      console.log('sign up req');
      localStorage.setItem(
        'SignupformData',
        JSON.stringify(this.signupform.value)
      );
      this.router.navigate(['login']);
      alert('Signup success');
    } else {
      alert('Form is invalid');
    }
  }

  get firstname() {
    return this.signupform.get('firstname');
  }

  get lastname() {
    return this.signupform.get('lastname');
  }

  get password() {
    return this.signupform.get('password');
  }

  get confirmpassword() {
    return this.signupform.get('confirmpassword');
  }

  get phone() {
    return this.signupform.get('phone');
  }

  //passcheck
  passCheck(frm: FormGroup) {
    const passV = frm.controls['password']?.value;
    const passV2 = frm.controls['confirmpassword']?.value;

    if (passV === passV2) {
      return null;
    } else {
      return { nomatch: true };
    }
  }

  ///////////////////////////////////////

  onPressingChar(event: KeyboardEvent) {
    const regex = /^[a-zA-Z\s]*$/;

    const charr = event.key;

    if (!regex.test(charr)) {
      event.preventDefault();
      alert('Your are typing number or a special character');
    }
  }

  ////////////////////////////

  onChangeCheckbox(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.signupform.patchValue({ termsAndConditions: isChecked });
  }

  ///go to login

  gotoLogin() {
    alert('success');
    console.log(this.signupform);
    this.router.navigate(['../login']);
  }
}
