import { Component, OnInit, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../shared/base-component';

@Component({
  selector: 'comp-mouse',
  templateUrl: './app/angular/comp-mouse/comp-mouse.component.html',
  styleUrls: ['./app/angular/comp-mouse/comp-mouse.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompMouseComponent extends BaseComponent implements OnInit {
  private _title = 'Ng Mouse';
  //private _title = 'Ng Mouse OnPush';

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
    this._highlightColor = '#983351';
  }

  ngOnInit() {
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }
}
