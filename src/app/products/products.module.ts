import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    CommonModule, MatTableModule
  ],
  exports: [ProductComponent, ProductListComponent]
})
export class ProductsModule { }
