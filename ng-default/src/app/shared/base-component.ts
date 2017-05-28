import { ElementRef, NgZone } from '@angular/core';

export abstract class BaseComponent {
  protected _elementRef: ElementRef;
  protected _ngZone: NgZone;
  protected _highlightColor: string;

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    this._elementRef = elementRef;
    this._ngZone = ngZone;
  }

  doAction($event) {
    console.log($event);
  }

  highlightComponent() {
    this._elementRef.nativeElement.animate([
      { background: '#ffffff', offset: 0 },
      { background: this._highlightColor, offset: 0.5 },
      { background: '#ffffff', offset: 1 }
    ], {
      duration: 2000,
      direction: 'alternate'
    });
    console.log('Checking', this.constructor.name);
  }

  doSomeComputation() {
    return 'done';// this.fibonacci(25);
  }

  fibonacci(num) {
    if (num <= 1) return 1;

    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }
}