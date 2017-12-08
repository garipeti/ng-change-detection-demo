import { Component, OnInit, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../shared/base-component';

@Component({
  selector: 'comp-middle-top',
  templateUrl: './app/angular/comp-middle-top/comp-middle-top.component.html',
  styleUrls: ['./app/angular/comp-middle-top/comp-middle-top.component.css'],
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
