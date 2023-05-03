import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  // loggedInSubject$ = this.loggedInSubject.asObservable();

  constructor() {}

  isAuthenticated(): Observable<boolean> {
    return this.loggedInSubject;
  }

  login(): void {
    this.loggedInSubject.next(true);
  }

  logout(): void {
    console.trace('called logout form');
    this.loggedInSubject.next(false);
  }

  getValue(): any {
    return this.loggedInSubject;
  }
}
