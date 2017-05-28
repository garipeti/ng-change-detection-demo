import { Component, OnInit, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../shared/base-component';

@Component({
  selector: 'comp-click',
  templateUrl: './comp-click.component.html',
  styleUrls: ['./comp-click.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompClickComponent extends BaseComponent implements OnInit {
  private _title = 'Ng Click';
  //private _title = 'Ng Click OnPush';

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
    this._highlightColor = '#609732';
  }

  ngOnInit() {
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }
}
