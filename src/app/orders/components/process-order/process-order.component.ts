import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { CartItem } from '../../../cart/models/cart.model';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {
  productsInCart: Array<CartItem> = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.productsInCart = this.cartService.getProducts();
  }

  ngDoCheck(): void {
    this.productsInCart = this.cartService.getProducts();
  }

  getQuantityCartProducts(): number{

    return this.cartService.getQuantityCartProducts();
  }

  getSumCartProducts(): number{

    return this.cartService.getSumCartProducts();
  }
}
