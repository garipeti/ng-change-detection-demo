import { BaseComponent } from '../shared/base-component';

export class CompMiddleTopController extends BaseComponent {
  private _title = 'Angular.js Left';

  /* @ngInject */
  constructor($element) {
    super($element);
    this._highlightColor = '#aa5739';
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }
}

export const CompMiddleTopComponent = {
  restrict: 'E',
  bindings: {},
  template: `
<h3>{{vm.title}}</h3>
<p>
  <comp-mouse></comp-mouse>
</p>
<p>
  <ng-comp-middle-top></ng-comp-middle-top>
</p>
`,
  controller: CompMiddleTopController,
  controllerAs: 'vm'
};
