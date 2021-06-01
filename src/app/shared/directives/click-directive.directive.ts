import { Directive,ElementRef, HostListener, Input, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appClickDirective]'
})
export class ClickDirectiveDirective {
  
  @Input('appClickDirective') color: string = '';

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click')
  onClick(): void {
      
    this.highlightBorder(this.color);
  }

  highlightBorder(color: string): void {

    if (color === undefined || color ==='') {

      color = 'red';
    }

    this.render.setStyle(this.el.nativeElement, 'border', `3px solid ${color}`);
  }
}
