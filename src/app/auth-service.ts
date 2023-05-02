import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedInSubject = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedInSubject.asObservable();

  constructor() {}

  isAuthenticated(): Observable<boolean> {
    console.log('log in subject', this.loggedInSubject.getValue());

    return this.loggedInSubject.asObservable();
  }

  login(): void {
    console.log('login called ', this.loggedInSubject.getValue());
    this.loggedInSubject.next(true);

    // console.trace('login was called form : ');
  }

  logout(): void {
    console.trace('called logout form');
    this.loggedInSubject.next(false);
  }

  getValue(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
}
