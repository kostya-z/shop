import { Injectable } from '@angular/core';

import { ProductItem } from '../../products/models/product.model';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts : Array<CartItem> = [];
  private totalSum = 0;
  private totalQuantity  = 0;

  constructor() { }

  addProduct(product: ProductItem, amount: number = 1): void {

    const cartItem = new CartItem(product.id, product.name, product.price, amount);

    const index = this.cartProducts.findIndex(productInCart => productInCart.id === product.id);

    if (index < 0) {

      // const newCartItem = new CartItem(product.id, product.name, product.price, amount);

      // this.cartProducts.push(newCartItem);
      this.cartProducts = [...this.cartProducts, cartItem];

    } else {

      // this.cartProducts [index].quantity ++;
      this.changeQuantity(cartItem, amount);
    }

    this.updateCartData();
  }

  increaseQuantity(product: CartItem, amount: number = 1): void {

    // const index = this.cartProducts.findIndex(productInCart => productInCart.id === product.id);

    // if (index > -1) {
    //   this.cartProducts[index].quantity ++;

    //   this.updateCart();
    // }
    this.changeQuantity(product, amount);

  }

  decreaseQuantity(product: CartItem, amount: number = -1): void {

    // const index = this.cartProducts.findIndex(productInCart => productInCart.id === product.id);

    // if (index > -1) {
    //   this.cartProducts[index].quantity --;
    // }

    // if (this.cartProducts[index].quantity === 0) {

    //   this.removeProduct(product);
    // }

    // this.updateCart();

    this.changeQuantity(product, amount);
  }

  removeProduct(product: CartItem): void {

    const index = this.cartProducts.findIndex(productInCart => productInCart.id === product.id);

    if (index > -1) {
      // this.cartProducts.splice(index, 1);

      this.cartProducts = [...this.cartProducts.slice(0, index), ...this.cartProducts.slice(index + 1)];

      this.updateCartData();
    }

  }

  getProducts(): Array<CartItem>{

    return this.cartProducts;
  }

  getSumCartProducts(): number{

    return this.totalSum ;
  }

  getQuantityCartProducts(): number{

    return this.totalQuantity ;
  }

  removeAllProducts(): void {
    this.cartProducts = [];

    this.updateCartData();
  }

  isEmptyCart(): boolean {
    return this.cartProducts.length === 0;
  }

  private changeQuantity(product: CartItem, amount: number) {
    
    const newCartProducts = [...this.cartProducts];
    
    const index = newCartProducts.findIndex(productInCart => productInCart.id === product.id);

    if (index > -1) {
      
      newCartProducts[index].quantity = newCartProducts[index].quantity + amount;

      this.cartProducts = newCartProducts;
    }

    if (this.cartProducts[index].quantity <= 0) {

      this.removeProduct(product);
    }


    this.updateCartData();
  }

  private updateCartData(): void {

    this.totalSum  = this.cartProducts.reduce((sum: number, product: CartItem) =>
                                                                            sum + product.price * product.quantity, 0);

    this.totalQuantity  = this.cartProducts.reduce((sum: number, product: CartItem) =>
                                                                            sum + product.quantity, 0);
  }
}
