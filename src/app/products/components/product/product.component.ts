import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { ProductItem } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input()
  products: Array<ProductItem> =[];

  @Output()
  productToBuy: EventEmitter<ProductItem> = new EventEmitter<ProductItem>();

  headers: string[] = ['id', 'name', 'price', 'actions'];

  ngOnInit(): void {
    
  }

  onBuy(): void {
    console.log('Item purchased!');
  }

  onAddInCart(product: ProductItem): void {
   
    this.productToBuy.emit(product);
  }

}
