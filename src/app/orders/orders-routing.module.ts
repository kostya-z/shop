import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProcessOrderComponent} from './components/process-order/process-order.component';
import { IsCartEmptyGuard } from './guards/isCartEmpty.guard';

const routes: Routes = [
    {
      path: 'order',
      component: ProcessOrderComponent,
      canLoad: [IsCartEmptyGuard],
      loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule),
      canActivate: [IsCartEmptyGuard],
    //   canDeactivate:[],

      data: {
        title: 'Process Order',

        }

    }

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class OrdersRoutingModule {
    static components = [ProcessOrderComponent];
  }
