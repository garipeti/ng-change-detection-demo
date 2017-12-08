import { BaseComponent } from '../shared/base-component';

export class CompTimerController extends BaseComponent {
  private _title = 'Angular.js Timer';
  public timer;

  /* @ngInject */
  constructor($element, private counterService, private $interval) {
    super($element);
    this._highlightColor = '#551700';
  }

  toggleTimer() {
    if (this.timer) {
      this.$interval.cancel(this.timer);
      this.timer = null;
    } else {
      this.timer = this.$interval(() => this._onTick(), 3000);
    }
  }

  get title() {
    this.highlightComponent();
    return this._title;
  }

  private _onTick() {
    console.log('tick...');
    this.counterService.inc();
  }
}

export const CompTimerComponent = {
  restrict: 'E',
  bindings: {},
  template: `
<h3>{{vm.title}}</h3>
<p>
  <button ng-click="vm.toggleTimer()">{{vm.timer ? 'Stop' : 'Start'}}</button>
</p>
`,
  controller: CompTimerController,
  controllerAs: 'vm'
};
