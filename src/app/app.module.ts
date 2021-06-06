import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
// import { ProductComponent } from './products/components/product/product.component';
// import { ProductListComponent } from './products/components/product-list/product-list.component';
// import { CartListComponent } from './cart/cart-list/cart-list.component';

import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    // ProductComponent,
    // ProductListComponent,
    // CartListComponentt
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    CartModule,
    ProductsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
