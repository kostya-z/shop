import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appTitle') appTitle: ElementRef<HTMLHeadingElement> | undefined;

  title = 'shop';

  ngAfterViewInit(): void {
    
    if (this.appTitle !== undefined) {
     
      this.appTitle.nativeElement.innerText = 'Angular app example';
    }
 
  }
}
