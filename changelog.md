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

## Task 3. Services and DI
1. Redesigned 'CartService' (added new methods & properties).
2. Added new 'ConfigOptionsService' (used 'Partial' & '...').
3. Added new token-service: 'ConstantsService' (used 'useValue').
4. Added new 'GeneratorService' (useFactory+deps).
5. Added generator (used function-generator).
6. Added new token-service: 'LocalStorageService' (used 'window.localStorage'; 'useValue').
7. Inject this new functional in the 'FirstComponent' (used @Optional()).
8. Added new directive 'ClickDirective' (@Input(), ElementRef + Renderer2).

## Task4. Pipes.
1. Used pipes: "| currency:'USD'" , "| uppercase".
2. Added 'OrderByPipe'.
3. Apply 'OrderByPipe' to the cart.
4. CommonModule, FormsModule were moved to SharedModule.

## Task5. Routing.
1. Route '/products-list ' to 'ProductListComponent'.
2. Route '/product/:productID' to 'ProductViewComponent'
3. Route '/cart' to 'CartListComponent'
4. Route '/order' to ProcessOrderComponent. + CanLoad/CanActivate Guard (IsCartEmptyGuard) 
5. Implemented Admin pannel (Login page + user roles; /admin + CanActivate Guard;
    /admin/products; 
    /admin/product/add; 
    /admin/product/edit/:productID + resolve guard + CanDeactivate Guard;
    /admin/orders
6. Save Cart state also in the localstorage.
