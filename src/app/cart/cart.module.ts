import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {CartRoutingModule} from './cart-routing.module';

import { SharedModule } from '../shared/shared.module';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ CartListComponent, CartItemComponent, CartRoutingModule.components ],
  imports: [
    // CommonModule,
    SharedModule,
    // FormsModule,
    CartRoutingModule
  ],
  exports: [ CartListComponent ]
})
export class CartModule { }
