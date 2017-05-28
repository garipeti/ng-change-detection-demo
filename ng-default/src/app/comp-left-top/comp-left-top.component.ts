import { Component, OnInit, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../shared/base-component';

@Component({
  selector: 'comp-left-top',
  templateUrl: './comp-left-top.component.html',
  styleUrls: ['./comp-left-top.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompLeftTopComponent extends BaseComponent implements OnInit {
  private _title = 'Ng Left';
  //private _title = 'Ng Left OnPush';

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
    this._highlightColor = '#277552';
  }

  ngOnInit() {
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }
}
