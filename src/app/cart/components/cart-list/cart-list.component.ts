import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Subscription } from 'rxjs';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart.model';

import {CartCommunicatorService } from '../../services/cart-communicator.service';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {

  productsInCart: Array<CartItem> = [];
  sumCartProducts = 0;
  quantityCartProducts = 0;

  sortOptions = ['name', 'price', 'count'];
  sortedField = 'price';
  isAsc = true;

  private removeCartItemSubscription: Subscription | undefined;

  constructor(private cartService: CartService,
              private cartCommunicatorService: CartCommunicatorService,
              private router: Router)
  { }

  ngOnInit(): void {

    this.productsInCart = this.cartService.getProducts();

    // service push-strategy version
    this.removeCartItemSubscription = this.cartCommunicatorService.removeCartItemChannel$.subscribe(
      data => this.onRemoveFromCart(data)
    );
  }

  ngDoCheck(): void {
    this.productsInCart = this.cartService.getProducts();
  }

  // service push-strategy version
  ngOnDestroy(): void {

    if (this.removeCartItemSubscription !== undefined) {
      this.removeCartItemSubscription.unsubscribe();
    }
  }


  onIncreaseCartItem(product: CartItem): void {

    this.cartService.increaseQuantity(product);
  }

  onDecreaseCartItem(product: CartItem): void {

    this.cartService.decreaseQuantity(product);
  }

  onRemoveFromCart(product: CartItem): void {

    this.cartService.removeProduct(product);
  }

  onClearCart(): void {
    this.cartService.removeAllProducts();
  }

  onMakeOrder(): void {
    console.log('order');
    const link = ['order'];
    this.router.navigate(link);
  }

  getSumCartProducts(): number{

    return this.cartService.getSumCartProducts();
  }

  getQuantityCartProducts(): number{

    return this.cartService.getQuantityCartProducts();
  }

  getIsEmptyCart(): boolean {
    return this.cartService.isEmptyCart();
  }

}
