import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ProductListComponent } from '../app/products/components/product-list/product-list.component';
import {PathNotFoundComponent} from '../app/layout/components/path-not-found/path-not-found.component';
import {LoginComponent} from '../app/layout/components/login/login.component';

const routes: Routes = [
    // {
    //   path: 'home',
    //   component: ProductListComponent
    // },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  
    {
      // The router will match this route if the URL requested
      // doesn't match any paths for routes defined in our configuration
      path: '**',
      component: PathNotFoundComponent
    }
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}

