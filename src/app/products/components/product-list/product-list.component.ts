import { Component, OnInit } from '@angular/core';

import { ProductItem } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

import { Observable, of, Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';

import {LocalStorageService2} from '../../../core/services/localStorageService ';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<ProductItem> = [];
  productsObservable: Observable<ProductItem[]> = of([]);

  productsPromise: Promise<ProductItem[]> = new Promise(() => []);
  productsFromPromise: Array<ProductItem> = [];

  constructor(private productService: ProductsService,
              private cartService: CartService,
              private router: Router, 
              private localStorage: LocalStorageService2) {

  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();

    this.productsObservable = this.productService.getProductsAsyncObservable();

    this.productsPromise = this.productService.getProductsPromise();

    // this.productsPromise.then(data=>{
    //   console.log('ngOnInit(): data: ' + data);
    //   console.log('ngOnInit(): -product: ' + data[0].name);
    //   this.productsFromPromise=data;
    //   console.log('ngOnInit(): this.productsFromPromise: ' + this.productsFromPromise);
    // });

  }

  onAddInCart(product: ProductItem): void {

    this.cartService.addProduct(product);
  }

  onViewProduct(product: ProductItem): void {

    const link = ['/product', product.id];
    this.router.navigate(link);

  }


  getProductsFromPromise(): ProductItem[] {

    // (async()=>{

    //   this.productsFromPromise = await this.productService.getProductsPromise();

    // });

    // return this.productsFromPromise

    // this.productsPromise = this.productService.getProductsPromise();
    // this.productsPromise.then(data=>{
    //   console.log('data: ' + data);
    //   console.log('-product: ' + data[0].name);
    //   this.productsFromPromise=data
    // });

    console.log('getProductsFromPromise(): this.productsFromPromise: ' + this.productsFromPromise);
    return this.productsFromPromise;
  }

  getCartFromLocalStorage(): string {
    
    const cartState = this.localStorage.getValue('cart');

    return cartState !== null ? cartState : 'Not Found in the localstorage';
  }

}
