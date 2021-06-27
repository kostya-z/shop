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
import { LayoutModule } from './layout/layout.module';
// import { FormsModule } from '@angular/forms';
import {OrdersModule} from './orders/orders.module';

import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';


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
    SharedModule,
    LayoutModule,
    OrdersModule,
    AdminModule,

    // MUST BE LAST
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(router: Router) {
    
    //for debugging
    const replacer = (key: string, value: any): string => typeof value === 'function' ? value.name : value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }

}
