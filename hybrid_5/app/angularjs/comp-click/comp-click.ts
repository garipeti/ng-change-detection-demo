import { BaseComponent } from '../shared/base-component';

export class CompClickController extends BaseComponent {
  private _title = 'Angular.js Click';

  /* @ngInject */
  constructor($element) {
    super($element);
    this._highlightColor = '#609732';
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }
}

export const CompClickComponent = {
  restrict: 'E',
  bindings: {},
  template: `
<h3>{{vm.title}}</h3>
<p>
  <button ng-click="doAction($event)">Click me</button>
</p>
`,
  controller: CompClickController,
  controllerAs: 'vm'
};
