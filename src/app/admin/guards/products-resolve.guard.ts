import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';

import { ProductItem } from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/services/products.service';

// rxjs
import { Observable, of } from 'rxjs';
import { map, delay, finalize, catchError, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolveGuard implements CanActivate, Resolve<ProductItem | null> {
  
  constructor(private productsService: ProductsService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductItem | null> {
    console.log('ProductResolve Guard is called');

    // if (!route.paramMap.has('userID')) {
    //   return of(new ProductItem(0, '', undefined, undefined));
    // }

    const id = route.paramMap.get('productID');
    const idInput = id !== null ? +id : 0
    console.log(idInput);
    
    // const test = this.productsService.getProduct(id);

    return this.productsService.getProduct(idInput).pipe(
      
      map((product: ProductItem) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/products']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/products']);
        // catchError MUST return observable
        return of(null);
      })
    );
  }
}
