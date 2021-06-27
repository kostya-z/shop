import { NgModule } from '@angular/core';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
// import { CommonModule } from '@angular/common';
import {OrdersRoutingModule} from './orders-routing.module';
// import {ProcessOrderComponent} from './components/process-order/process-order.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProcessOrderComponent, OrdersRoutingModule.components
  ],
  imports: [
    // CommonModule
    SharedModule,
    OrdersRoutingModule
  ],
  exports: [ProcessOrderComponent]
})
export class OrdersModule { }
