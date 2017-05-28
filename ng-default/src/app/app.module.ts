import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompLeftTopComponent } from './comp-left-top/comp-left-top.component';
import { CompMiddleTopComponent } from './comp-middle-top/comp-middle-top.component';
import { CompRightTopComponent } from './comp-right-top/comp-right-top.component';
import { CompMouseComponent } from './comp-mouse/comp-mouse.component';
import { CompTimerComponent } from './comp-timer/comp-timer.component';
import { CompClickComponent } from './comp-click/comp-click.component';
import { CompCounterComponent } from './comp-counter/comp-counter.component';

import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    CompLeftTopComponent,
    CompMiddleTopComponent,
    CompRightTopComponent,
    CompMouseComponent,
    CompTimerComponent,
    CompClickComponent,
    CompCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CounterService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
