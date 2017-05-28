import { Component, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../shared/base-component';
import { CounterService } from '../counter.service';

@Component({
  selector: 'comp-timer',
  templateUrl: './comp-timer.component.html',
  styleUrls: ['./comp-timer.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompTimerComponent extends BaseComponent {
  private _title = 'Ng Timer';
  public interval;

  constructor(elementRef: ElementRef, ngZone: NgZone, private _counterService: CounterService) {
    super(elementRef, ngZone);
    this._highlightColor = '#551700';
  }

  toggleTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    } else {
      this.interval = setInterval(() => this._onTick(), 3000);
    }
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }

  private _onTick() {
    console.log('tick...');
    this._counterService.inc();
  }
}
