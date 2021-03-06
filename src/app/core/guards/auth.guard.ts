import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree,
  NavigationExtras,CanLoad,Route,UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild  {

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log('CanActivate Guard is called');
    
      const { url } = state;
      return this.checkLogin(url);
  
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      console.log('CanActivateChild Guard is called');
      const { url } = state;
      return this.checkLogin(url);
  }

  // canLoad(route: Route, segments: UrlSegment[] ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   console.log('CanLoad Guard is called');
  //   const url = `/${route.path}`;
  //   return this.checkLogin(url) as boolean;
  // }

  
  private checkLogin(url: string): boolean | UrlTree {
    if (this.authService.isAdmin) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page, return UrlTree
    return this.router.parseUrl('/login');
  }

}