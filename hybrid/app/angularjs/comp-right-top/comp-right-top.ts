import { BaseComponent } from '../shared/base-component';

export class CompRightTopController extends BaseComponent {
  private _title = 'Angular.js Right';

  /* @ngInject */
  constructor($element) {
    super($element);
    this._highlightColor = '#224c00';
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }
}

export const CompRightTopComponent = {
  restrict: 'E',
  bindings: {},
  template: `
<h3>{{vm.title}}</h3>
<p>
  <comp-timer></comp-timer>
</p>
<p>
  <ng-comp-right-top></ng-comp-right-top>
</p>
`,
  controller: CompRightTopController,
  controllerAs: 'vm'
};
