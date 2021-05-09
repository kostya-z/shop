import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartCommunicatorService {

  private removeCartItemChannel = new Subject<CartItem>();
  
  public  removeCartItemChannel$ = this.removeCartItemChannel.asObservable();
  
  publishRemoveCartItem(cartItem: CartItem) {
    this.removeCartItemChannel.next(cartItem);
  }
}
