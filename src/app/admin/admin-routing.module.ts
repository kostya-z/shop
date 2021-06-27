import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductAddComponent} from './components/product-add/product-add.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {OrdersComponent} from './components/orders/orders.component';

import { AuthGuard } from '../core/guards/auth.guard';
import {ProductsResolveGuard} from './guards/products-resolve.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'products', component: ProductsComponent },
          { path: 'product/add', component: ProductAddComponent },
          { path: 'product/edit/:productID', 
            component: ProductEditComponent,
            resolve: {
              product: ProductsResolveGuard
            }
          },
          { path: 'orders', component: OrdersComponent },
          { path: '', component: ProductsComponent }
        ]
      }
    ]
  },
  // {
  //   path: 'products', component: ProductsComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 
  static components = [
    AdminComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    OrdersComponent
  ];

}
