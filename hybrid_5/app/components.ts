import * as angular from 'angular';
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

import { CompLeftTopComponent } from './angularjs/comp-left-top/comp-left-top';
import { CompMiddleTopComponent } from './angularjs/comp-middle-top/comp-middle-top';
import { CompRightTopComponent } from './angularjs/comp-right-top/comp-right-top';
import { CompClickComponent } from './angularjs/comp-click/comp-click';
import { CompMouseComponent } from './angularjs/comp-mouse/comp-mouse';
import { CompTimerComponent } from './angularjs/comp-timer/comp-timer';
import { CompCounterComponent } from './angularjs/comp-counter/comp-counter';

import { CompLeftTopComponent as NgCompLeftTopComponent } from './angular/comp-left-top/comp-left-top.component';
import { CompMiddleTopComponent as NgCompMiddleTopComponent } from './angular/comp-middle-top/comp-middle-top.component';
import { CompRightTopComponent as NgCompRightTopComponent } from './angular/comp-right-top/comp-right-top.component';
import { CompBlankComponent as NgCompBlankComponent } from './angular/comp-blank/comp-blank.component';
import { CounterService } from './angularjs/counter.service';

export const AppComponentsModule = angular.module('AppComponentsModule', [])
    .component('compLeftTop', CompLeftTopComponent)
    .component('compMiddleTop', CompMiddleTopComponent)
    .component('compRightTop', CompRightTopComponent)
    .component('compClick', CompClickComponent)
    .component('compMouse', CompMouseComponent)
    .component('compTimer', CompTimerComponent)
    .component('compCounter', CompCounterComponent)
    .service('counterService', CounterService)
    .directive(
      'ngCompBlank',
      <angular.IDirectiveFactory> downgradeComponent({
        component: NgCompBlankComponent,
        inputs: [],
        outputs: []
      })
    )
    .directive(
        'ngCompLeftTop',
        <angular.IDirectiveFactory> downgradeComponent({
            component: NgCompLeftTopComponent,
            inputs: [],
            outputs: []
        })
    )
    .directive(
        'ngCompMiddleTop',
        <angular.IDirectiveFactory> downgradeComponent({
            component: NgCompMiddleTopComponent,
            inputs: [],
            outputs: []
        })
    )
    .directive(
        'ngCompRightTop',
        <angular.IDirectiveFactory> downgradeComponent({
            component: NgCompRightTopComponent,
            inputs: [],
            outputs: []
        })
    );



