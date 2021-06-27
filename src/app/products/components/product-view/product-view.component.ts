import { Component, OnInit, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, UrlTree , ParamMap  } from '@angular/router';

import { ProductItem } from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

// rxjs
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { catchError, switchMap  } from 'rxjs/operators';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductViewComponent implements OnInit {
  @Output()
  productToBuy: EventEmitter<ProductItem> = new EventEmitter<ProductItem>();

  product: ProductItem | undefined;
  originalProduct: ProductItem | undefined;
  private viewProduct: ProductItem | undefined;
  private productId: string | null = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {

  }

  ngOnInit(): void {

    const observer = {
      next: (products: ProductItem[]) => {
        const id = this.productId != null ? +this.productId : 0;
        this.product = products.find(product => product.id === id);

        // console.log(
        //   `Last time you viewed the product: ${JSON.stringify(this.product)}`
        // );
      },
      error: (err: any) => console.log(err)
    };

    this.route.paramMap
        .pipe(
          switchMap((params: ParamMap) => {
            this.productId = params.get('productID');
            return this.productsService.getProductsAsyncObservable();
          })
        )
        .subscribe(observer);

  }

  onAddInCart(): void {

    // this.productToBuy.emit(this.product);
    if (this.product) {
      this.cartService.addProduct(this.product);
    }

  }

  onGoBack(): void {
    // this.router.navigate(['./../../'], { relativeTo: this.route});
    this.router.navigate(['./product-list']);
  }
}
