import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { BoldDirective} from './bold.directive';
import { ClickDirectiveDirective } from './directives/click-directive.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    BoldDirective,
    ClickDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    BoldDirective,
    ClickDirectiveDirective
  ]
})
export class SharedModule { }
