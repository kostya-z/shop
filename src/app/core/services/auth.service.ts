import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // isLoggedIn = false;

  isUser = false;
  isAdmin = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string = '';

  loginAdmin(): Observable<boolean> {
    this.isUser = false;
    
    return of(true).pipe(
      // delay(1000),
      tap(val => this.isAdmin = val)
    );
  }

  loginUser(): Observable<boolean> {
    this.isAdmin = false;

    return of(true).pipe(
      // delay(1000),
      tap(val => this.isUser = val)
    );
  }

  logout(): void {
    // this.isLoggedIn = false;
    this.isAdmin = false;
    this.isUser = false;
  }
}
