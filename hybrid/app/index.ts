import * as angular from 'angular';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { AppModule } from './app.module';
import { AppComponent } from './hybrid-app.component';
import { AppComponentsModule } from './components';

angular.module('hybridApp', [
  AppComponentsModule.name
])
    .component('hybridApp', AppComponent);

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade: UpgradeModule = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['hybridApp'], {strictDi: false});
});
