import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[bold]'
})
export class BoldDirective{

    private fontWeight = 'normal';

    // tslint:disable-next-line: typedef
    @HostBinding('style.fontWeight') get getFontWeight(){

        return this.fontWeight;
    }

    // tslint:disable-next-line: typedef
    @HostBinding('style.cursor') get getCursor(){
        return 'pointer';
    }

    // tslint:disable-next-line: typedef
    @HostListener('mouseenter') onMouseEnter() {
        this.fontWeight = 'bold';
    }

    // tslint:disable-next-line: typedef
    @HostListener('mouseleave') onMouseLeave() {
        this.fontWeight = 'normal';
    }
}
