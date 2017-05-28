import { Component, OnInit, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../shared/base-component';

@Component({
  selector: 'comp-right-top',
  templateUrl: './app/angular/comp-right-top/comp-right-top.component.html',
  styleUrls: ['./app/angular/comp-right-top/comp-right-top.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompRightTopComponent extends BaseComponent implements OnInit {
  private _title = 'Ng Right';
  //private _title = 'Ng Right OnPush';

  constructor(elementRef: ElementRef, ngZone: NgZone) {
    super(elementRef, ngZone);
    this._highlightColor = '#224c00';
  }

  ngOnInit() {
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }
}
