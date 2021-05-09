import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private backGroundColor = "";

  @HostBinding('style.backgroundColor') get getBackgroundColor() {
    
    return this.backGroundColor;
  }

  @HostListener('mouseenter', ['$event']) 
  onMouseEnter(event: Event) {
    
    this.backGroundColor = "gray";
  }

  @HostListener('mouseleave', ['$event']) 
  onMouseLeave(event: Event) {
   
    this.backGroundColor = "";
  }

  // @HostListener('click')
  // clicked() {
  //   console.log('click event on host element!!!');
  // }

}
