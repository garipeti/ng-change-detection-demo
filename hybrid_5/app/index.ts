import * as angular from 'angular';

import { StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeModule } from '@angular/upgrade/static';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { AppModule } from './app.module';
import { AppComponent } from './hybrid-app.component';
import { AppComponentsModule } from './components';

angular.module('hybridApp', [
  AppComponentsModule.name
])
    .component('hybridApp', AppComponent);

// UpgradeModule

// platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
//   const upgrade: UpgradeModule = platformRef.injector.get(UpgradeModule) as UpgradeModule;
//   upgrade.bootstrap(document.body, ['hybridApp'], {strictDi: false});
// });

// downgradeModule

const bootstrapFn = (extraProviders: StaticProvider[]) => {
  const platformRef = platformBrowserDynamic(extraProviders);
  return platformRef.bootstrapModule(AppModule);
};
const downgradedModule = downgradeModule(bootstrapFn);

angular.module('ng-upgrade', [
  'hybridApp',
  downgradedModule
]);

angular.bootstrap(document.body, ['ng-upgrade']);