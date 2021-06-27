import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { ProductItem } from '../../models/product.model';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';

// rxjs
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap  } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  products: Array<ProductItem> | null = [];

  // @Input()
  // productsObservable: Observable<Array<ProductItem>> | undefined;

  @Output()
  productToBuy: EventEmitter<ProductItem> = new EventEmitter<ProductItem>();

  @Output()
  productToView: EventEmitter<ProductItem> = new EventEmitter<ProductItem>();

  productsForTable: Array<ProductItem> = [];

  headers: string[] = ['id', 'name', 'price', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute

  ) { }


  ngOnInit(): void {

    console.log('this.products: ' + this.products);

    if (this.products != null) {
      this.productsForTable = this.products;
    }



  }

  onBuy(): void {
    console.log('Item purchased!');
  }

  onAddInCart(product: ProductItem): void {

    this.productToBuy.emit(product);
  }

  onViewProduct(product: ProductItem): void {

    // this.route.paramMap
    //     .pipe(
    //       switchMap(async () => product));

    // const link = ['/product', product.id];
    // this.router.navigate(link);
    this.productToView.emit(product);
  }

}
