import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { BoldDirective} from './bold.directive';
import { ClickDirectiveDirective } from './directives/click-directive.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HighlightDirective,
    BoldDirective,
    ClickDirectiveDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HighlightDirective,
    BoldDirective,
    ClickDirectiveDirective,
    OrderByPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
