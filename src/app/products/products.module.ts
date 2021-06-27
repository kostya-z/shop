import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductViewComponent } from './components/product-view/product-view.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductViewComponent],
  imports: [
    // CommonModule,
    SharedModule,
    MatTableModule,
    ProductsRoutingModule

  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
