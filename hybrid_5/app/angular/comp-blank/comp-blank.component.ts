import { Component, OnInit, ElementRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { BaseComponent } from '../shared/base-component';

@Component({
  selector: 'comp-blank',
  template: 'I am blank',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompBlankComponent {
  constructor() {
  }
}
