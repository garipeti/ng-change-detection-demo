import { Component, ElementRef, NgZone, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { BaseComponent } from '../shared/base-component';
import { CounterService } from '../counter.service';

@Component({
  selector: 'comp-counter',
  templateUrl: './app/angular/comp-counter/comp-counter.component.html',
  styleUrls: ['./app/angular/comp-counter/comp-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompCounterComponent extends BaseComponent implements OnInit {
  private _title = 'Ng Counter';
  //private _title = 'Ng Counter OnPush';

  constructor(elementRef: ElementRef, ngZone: NgZone, private _counterService: CounterService, private _changeDetectorRef: ChangeDetectorRef) {
    super(elementRef, ngZone);
    this._highlightColor = '#991700';
  }

  ngOnInit() {
    //this._counterService.events.subscribe(() => this._onEvent());
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }

  get counter() {
    return this._counterService.count;
  }

  increment() {
    this._counterService.inc();
  }

  private _onEvent() {
    this._changeDetectorRef.markForCheck();
  }
}
