import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartListComponent} from '../cart/components/cart-list/cart-list.component';
import {ProcessOrderComponent} from '../orders/components/process-order/process-order.component';

const routes: Routes = [
    {
      path: 'cart',
      component: CartListComponent,
    //   children: [
    //     {
    //       path: 'order',
    //       component: ProcessOrderComponent,
        //   canActivate: [],
        //   canDeactivate:[]
        },
        // {
        //   path: 'edit/:userID',
        //   component: UserFormComponent,
        //   canDeactivate: [CanDeactivateGuard],
        //   resolve: {
        //     user: UserResolveGuard
        //   }

        // },
        // {
        //   path: '',
        //   component: UserListComponent
        // },
    //   ]
    // }

  ];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CartRoutingModule {
static components = [CartListComponent];
}
