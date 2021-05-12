import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { CartItem } from '../../models/cart.model';
import {CartCommunicatorService } from '../../services/cart-communicator.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  product: CartItem | undefined;

  @Output()
  increaseProduct: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  @Output()
  decreaseProduct: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  @Output()
  productToRemove: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor(
    private cartCommunicatorService: CartCommunicatorService
  ) {}

  ngOnInit(): void {
  }

  onIncreaseCartItem(product: CartItem | undefined): void {

    this.increaseProduct.emit(product);
  }

  onDecreaseCartItem(product: CartItem | undefined): void {

    this.decreaseProduct.emit(product);
  }

  // emitter version
  // onRemoveFromCart(product: CartItem | undefined): void {

  //   this.productToRemove.emit(product);
  // }

  // service push-strategy version
  onRemoveFromCart(product: CartItem | undefined): void {

    if (product !== undefined) {
      this.cartCommunicatorService.publishRemoveCartItem(product);
    }

  }

}
