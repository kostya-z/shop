import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: 'product-list',
      component: ProductListComponent,

      data: {
        title: 'Product List',

        }

    },
    {
        path: 'product/:productID',
        component: ProductViewComponent,
        // canDeactivate: [CanDeactivateGuard],
        // resolve: {
        //     user: UserResolveGuard
        // }

      }

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductsRoutingModule { }
