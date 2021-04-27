import { Component, OnInit } from '@angular/core';

import { ProductItem } from '../../products/models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  productsInCart: Array<ProductItem> = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.productsInCart = this.cartService.getCartProducts();
    // this.productsInCart.length
  }

  // addInCart(product: ProductItem): void {

  //   this.cartService.addInCart(product);

  //   // console.log('cart count: ' + this.productsInCart.length);
  // }

  // identify(index: number, product: ProductItem) {
  //   return product;
  // }
}
