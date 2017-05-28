import { Component, ElementRef, NgZone } from '@angular/core';
import { BaseComponent } from './shared/base-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  private _title = 'Ng app!';

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
    this._highlightColor = '#991700';
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }
}
