import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle: ElementRef<HTMLHeadingElement> | undefined;

  title = 'shop';

  ngAfterViewInit(): void {

    if (this.appTitle !== undefined) {

      this.appTitle.nativeElement.innerText = 'Angular app example';
    }

  }

  onActivate($event: any, routerOutlet: RouterOutlet) {

    console.log('Activated Component', $event, routerOutlet);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet) {

    console.log('Deactivated Component', $event, routerOutlet);
  }

}
