import { Injectable } from '@angular/core';

import { ProductItem } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsInCart: Array<ProductItem> = [];

  constructor() { }

  addInCart(product: ProductItem): void {

    this.productsInCart.push(product);
  }

  removeFromCart(product: ProductItem): void {

    const index = this.productsInCart.indexOf(product);

    if (index > -1) {
      this.productsInCart.splice(index, 1);
    }

  }

  getCartProducts(): Array<ProductItem>{

    return this.productsInCart;
  }
}
