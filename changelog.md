## Task 1. Introduction
1. Created "FirstComponent".
2. Created "ProductComponent" & "ProductListComponent"
3. Created "CartListComponent"
4. Additional functionality: add/remove product to/from the cart.

## Task 2. Components 
1. Redesigned app by modules creation.
2. Redesigned 'ProductListComponent', 'ProductComponent' (used  @Input, @Output)
3. Added new 'СartItemComponent' (added buttons for '+', '-', 'Remove'; used  @Input, @Output)
4. Redesigned 'CartListComponent' (added 'Quantity' and 'Sum')
5. Redesigned 'CartService' (added methods for managing Cart from 'CartListComponent')
6. Modified 'СartItemComponent' & 'CartListComponent' (used OnPush strategy for 'onRemoveFromCart' - 'CartCommunicatorService' was created for this). Also, OnDestroy hook was used.
7. Added <h1 #appTitle></h1> (used @ViewChild, ElementRef<HTMLHeadingElement>, ngAfterViewInit).
8. Added HighlightDirective (used  @HostBinding, @HostListener ).
9. Used ngClass & ngStyle (in the 'CartListComponent')
10. Additional functionality: 
    - BoldDirective;
    - Bootstrap’s styles;
    - Angular Material styles.
