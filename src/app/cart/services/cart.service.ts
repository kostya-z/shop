import { Injectable } from '@angular/core';

import { ProductItem } from '../../products/models/product.model';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productsInCart: Array<CartItem> = [];
  private sumCartProducts = 0;
  private quantityCartProducts = 0;

  constructor() { }

  addInCart(product: ProductItem): void {

    const index = this.productsInCart.findIndex(productInCart => productInCart.id === product.id);

    if (index < 0) {

      const newCartItem = new CartItem(product.id, product.name, product.price, 1);

      this.productsInCart.push(newCartItem);

    } else {

      this.productsInCart[index].quantity ++;
    }

    this.updateCart();
  }

  increaseCartItem(product: CartItem): void {

    const index = this.productsInCart.findIndex(productInCart => productInCart.id === product.id);

    if (index > -1) {
      this.productsInCart[index].quantity ++;

      this.updateCart();
    }

  }

  decreaseCartItem(product: CartItem): void {

    const index = this.productsInCart.findIndex(productInCart => productInCart.id === product.id);

    if (index > -1) {
      this.productsInCart[index].quantity --;
    }

    if (this.productsInCart[index].quantity === 0) {

      this.removeFromCart(product);
    }

    this.updateCart();
  }

  removeFromCart(product: CartItem): void {

    const index = this.productsInCart.findIndex(productInCart => productInCart.id === product.id);

    if (index > -1) {
      this.productsInCart.splice(index, 1);

      this.updateCart();
    }

  }

  getCartProducts(): Array<CartItem>{

    return this.productsInCart;
  }

  getSumCartProducts(): number{

    return this.sumCartProducts;
  }

  getQuantityCartProducts(): number{

    return this.quantityCartProducts;
  }

  private updateCart(): void {

    this.sumCartProducts = this.productsInCart.reduce((sum: number, product: CartItem) =>
                                                                            sum + product.price * product.quantity, 0);

    this.quantityCartProducts = this.productsInCart.reduce((sum: number, product: CartItem) =>
                                                                            sum + product.quantity, 0);
  }
}
