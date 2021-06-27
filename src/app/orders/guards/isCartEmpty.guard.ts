import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, CanLoad, RouterStateSnapshot, Route, UrlSegment,
          UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../cart/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class IsCartEmptyGuard implements CanActivate {

  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('IsCartEmptyGuard.canActivate() is called');

    return this.cartService.getQuantityCartProducts() > 0;
  }

  canLoad(route: Route, segments: UrlSegment[] ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('IsCartEmptyGuard.canLoad() is called');

    if (this.cartService.getQuantityCartProducts() > 0) {
      return true;
    }

    // this.router.navigate(['./../../'], { relativeTo: this.route});

    // Navigate to the login page, return UrlTree
    // return this.router.parseUrl('./../../');
    return this.router.parseUrl('./cart');

  }


}
