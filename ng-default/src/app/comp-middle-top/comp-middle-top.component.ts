import { Component, OnInit, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../shared/base-component';

@Component({
  selector: 'comp-middle-top',
  templateUrl: './comp-middle-top.component.html',
  styleUrls: ['./comp-middle-top.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompMiddleTopComponent extends BaseComponent implements OnInit {
  private _title = 'Ng Middle';
  //private _title = 'Ng Middle OnPush';

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
    this._highlightColor = '#aa5739';
  }

  ngOnInit() {
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }
}
