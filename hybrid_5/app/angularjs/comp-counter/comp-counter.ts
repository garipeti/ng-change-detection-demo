import { BaseComponent } from '../shared/base-component';

export class CompCounterController extends BaseComponent {
  private _title = 'Angular.js Counter';
  private _counterService;
  private _$scope;

  /* @ngInject */
  constructor($element, counterService, $scope) {
    super($element);
    this._highlightColor = '#551700';
    this._counterService = counterService;
    this._$scope = $scope;

    // this._counterService.events.subscribe(() => this._onEvent())
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }

  get counter() {
    return this._counterService.count;
  }

  private _onEvent() {
    console.log('detectChanges', this);
    this._$scope.$apply();
  }
}

export const CompCounterComponent = {
  restrict: 'E',
  bindings: {},
  template: `
<h3>{{vm.title}}</h3>
<p>
  {{vm.counter}}</button>
</p>
`,
  controller: CompCounterController,
  controllerAs: 'vm'
};
