import { BaseComponent } from '../shared/base-component';

export class CompTimerController extends BaseComponent {
  private _title = 'Angular.js Timer';
  private interval;
  private _counterService;

  /* @ngInject */
  constructor($element, counterService) {
    super($element);
    this._highlightColor = '#551700';
    this._counterService = counterService;
  }

  toggleTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    } else {
      this.interval = setInterval(() => this._onTick(), 3000);
    }
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }

  private _onTick() {
    console.log('tick...');
    this._counterService.inc();
  }
}

export const CompTimerComponent = {
  restrict: 'E',
  bindings: {},
  template: `
<h3>{{vm.title}}</h3>
<p>
  <button ng-click="vm.toggleTimer()">{{vm.interval ? 'Stop' : 'Start'}}</button>
</p>
`,
  controller: CompTimerController,
  controllerAs: 'vm'
};
