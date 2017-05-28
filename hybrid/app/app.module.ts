import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { CompLeftTopComponent } from './angular/comp-left-top/comp-left-top.component';
import { CompMiddleTopComponent } from './angular/comp-middle-top/comp-middle-top.component';
import { CompRightTopComponent } from './angular/comp-right-top/comp-right-top.component';
import { CompClickComponent } from './angular/comp-click/comp-click.component';
import { CompMouseComponent } from './angular/comp-mouse/comp-mouse.component';
import { CompTimerComponent } from './angular/comp-timer/comp-timer.component';
import { CompCounterComponent } from './angular/comp-counter/comp-counter.component';

import { CounterService } from './angular/counter.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
      CounterService
  ],
  entryComponents: [
      CompLeftTopComponent,
      CompMiddleTopComponent,
      CompRightTopComponent
  ],
  declarations: [
    CompLeftTopComponent,
    CompMiddleTopComponent,
    CompRightTopComponent,
    CompClickComponent,
    CompMouseComponent,
    CompTimerComponent,
    CompCounterComponent
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}