import { Injectable } from '@angular/core';

import { ProductItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<ProductItem>{
    return[
      new ProductItem(1, 'Product1', 11, true),
      new ProductItem(2, 'Product2', 22, false),
      new ProductItem(3, 'Product3', 33, true),
    ];
  }
}
