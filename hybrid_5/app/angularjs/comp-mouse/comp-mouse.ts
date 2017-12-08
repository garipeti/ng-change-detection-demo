import { BaseComponent } from '../shared/base-component';

export class CompMouseController extends BaseComponent {
  private _title = 'Angular.js Mouse';

  /* @ngInject */
  constructor($element) {
    super($element);
    this._highlightColor = '#983351';
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }
}

export const CompMouseComponent = {
  restrict: 'E',
  bindings: {},
  template: `
<h3>{{vm.title}}</h3>
<p ng-mouseover="doAction($event)">
  Hover me
</p>
`,
  controller: CompMouseController,
  controllerAs: 'vm'
};
