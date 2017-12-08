import { BaseComponent } from './angularjs/shared/base-component';

export class AppController extends BaseComponent {
    public title;

    /* @ngInject */
    constructor($element) {
        super($element);
        this.title = 'Hybrid App';
    }
}

export const AppComponent = {
    restrict: 'E',
    bindings: {},
    template: `
<h1>{{vm.title}}</h1>
<!--ng-comp-blank></ng-comp-blank-->
<div class="flex-row">
  <comp-left-top class="flex-grow"></comp-left-top>
  <comp-middle-top class="flex-grow"></comp-middle-top>
  <comp-right-top class="flex-grow"></comp-right-top>
</div>
`,
    controller: AppController,
    controllerAs: 'vm'
};
