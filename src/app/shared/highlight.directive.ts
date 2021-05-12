import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private backGroundColor = '';

  // tslint:disable-next-line: typedef
  @HostBinding('style.backgroundColor') get getBackgroundColor() {

    return this.backGroundColor;
  }

  @HostListener('mouseenter', ['$event'])
  // tslint:disable-next-line: typedef
  onMouseEnter(event: Event) {

    this.backGroundColor = 'gray';
  }

  @HostListener('mouseleave', ['$event'])
  // tslint:disable-next-line: typedef
  onMouseLeave(event: Event) {

    this.backGroundColor = '';
  }

  // @HostListener('click')
  // clicked() {
  //   console.log('click event on host element!!!');
  // }

}
