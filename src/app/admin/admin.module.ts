import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [AdminRoutingModule.components],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  // exports:[AdminRoutingModule.components]
})
export class AdminModule { }
