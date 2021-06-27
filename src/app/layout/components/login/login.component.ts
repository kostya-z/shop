import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationExtras  } from '@angular/router';

// rxjs
import { Subject } from 'rxjs';
import { AuthService } from './../../../core/services/auth.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  message: string = '';
  private unsubscribe: Subject<void> = new Subject();

  constructor(public authService: AuthService, 
                     private router: Router) { }

  ngOnInit(): void {
    this.setMessage();
  }

  ngOnDestroy() {
    this.unsubscribe.complete();
  }

  onAdminLogin() {
    
    this.message = 'Trying to log in as Admin...';
    
    const observer = {
      next: () => {
        this.setMessage();
        if (this.authService.isAdmin) {
          
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/admin/products';

            const navigationExtras: NavigationExtras = {
              queryParamsHandling: 'preserve',  
              preserveFragment: true
            };
    
          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        }
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('[takeUntil] complete')
    };

    this.authService.loginAdmin()
      // The TakeUntil subscribes and begins mirroring the source Observable.
      // It also monitors a second Observable that you provide.
      // If this second Observable emits an item or sends a termination notification,
      // the Observable returned by TakeUntil stops mirroring the source Observable and terminates.
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer);
  }

  onUserLogin() {
    
    this.message = 'Trying to log in as User...';
    
    const observer = {
      next: () => {
        this.setMessage();
        if (this.authService.isUser) {
          
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/login';

            const navigationExtras: NavigationExtras = {
              queryParamsHandling: 'preserve',  
              preserveFragment: true
            };
    
          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        }
      },
      error: (err: any) => console.log(err),
      complete: () => console.log('[takeUntil] complete')
    };

    this.authService.loginUser()
      // The TakeUntil subscribes and begins mirroring the source Observable.
      // It also monitors a second Observable that you provide.
      // If this second Observable emits an item or sends a termination notification,
      // the Observable returned by TakeUntil stops mirroring the source Observable and terminates.
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer);
  }

  onLogout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage() {
    const role = this.authService.isAdmin ? 'Logged as Admin' : this.authService.isUser ? 'Logged as User' : 'Not logged';
     
    // this.message = 'Logged as an ' + (this.authService.isLoggedIn ? 'in' : 'out');
    this.message = role;
  } 
}
