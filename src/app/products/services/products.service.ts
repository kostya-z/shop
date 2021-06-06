import { Injectable } from '@angular/core';
import { Observable, Subscriber, of } from 'rxjs';

import { ProductItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<ProductItem>{
    return[
      new ProductItem(1, 'Product3', 11, true),
      new ProductItem(2, 'Product2', 22, false),
      new ProductItem(3, 'Product1', 33, true),
    ];
  }

  getProductsAsyncObservable(): Observable<Array<ProductItem>> {
    return of ([
      new ProductItem(1, 'Product3', 11, true),
      new ProductItem(2, 'Product2', 22, false),
      new ProductItem(3, 'Product1', 33, true),
    ]);
  }

  getProductsPromise(): Promise<Array<ProductItem>> {
    return new Promise  ( (res) =>  res( [
      new ProductItem(1, 'Product3', 11, true),
      new ProductItem(2, 'Product2', 22, false),
      new ProductItem(3, 'Product1', 33, true),
    ])) ;
  }
}
