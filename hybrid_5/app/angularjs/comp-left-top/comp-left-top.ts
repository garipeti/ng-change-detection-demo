import { BaseComponent } from '../shared/base-component';

export class CompLeftTopController extends BaseComponent {
  private _title = 'Angular.js Left';

  /* @ngInject */
  constructor($element) {
    super($element);
    this._highlightColor = '#277552';
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }
}

export const CompLeftTopComponent = {
  restrict: 'E',
  bindings: {},
  template: `
<h3>{{vm.title}}</h3>
<p>
  <comp-click></comp-click>
</p>
<p>
  <ng-comp-left-top></ng-comp-left-top>
</p>
`,
  controller: CompLeftTopController,
  controllerAs: 'vm'
};
