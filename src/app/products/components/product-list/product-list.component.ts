import { Component, OnInit } from '@angular/core';

import { ProductItem } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<ProductItem> = [];

  constructor(private productService: ProductsService,
              private cartService: CartService) {

  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddInCart(product: ProductItem): void {

    this.cartService.addProduct(product);
  }

}
