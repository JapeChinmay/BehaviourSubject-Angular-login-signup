import { Injectable } from '@angular/core';
import { userDetails } from './Interface';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class dataSharingService {
  private userData = new BehaviorSubject<userDetails>({
    name: '',
    lastname: '',
  });

  constructor() {}

  sendUserDatatoLogin(data: userDetails) {
    // console.log('called', this.userData.asObservable());
    this.userData.next(data);
  }

  getUserDataForLogin(): Observable<userDetails> {
    // console.log(this.userData.asObservable());
    return this.userData.asObservable();
  }

  getUserDataOnNavbar(): Observable<userDetails> {
    return this.userData.asObservable();
  }

  getUserDataOncheckout(): Observable<userDetails> {
    return this.userData.asObservable();
  }
}
