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
import { CompBlankComponent } from './angular/comp-blank/comp-blank.component';

import { counterServiceProvider } from './angularjs/ajs-upgraded-providers';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [
    counterServiceProvider
  ],
  entryComponents: [
    CompLeftTopComponent,
    CompMiddleTopComponent,
    CompRightTopComponent,
    CompBlankComponent
  ],
  declarations: [
    CompLeftTopComponent,
    CompMiddleTopComponent,
    CompRightTopComponent,
    CompClickComponent,
    CompMouseComponent,
    CompTimerComponent,
    CompCounterComponent,
    CompBlankComponent
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}